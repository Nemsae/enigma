const express = require('express');

const router = express.Router();

const Message = require('../models/Message');
const encryptionTest = require('../utils/encryption');
const decryptionTest = require('../utils/decryption');

router.route('/')
  .get((req, res) => {
    const decryptionPackage = req.query;
    const packageMessage = decryptionPackage.encryptedMessage;
    const packageDate = decryptionPackage.currentDate;
    const packageKey = decryptionPackage.key;

    Message.find({ key: packageKey })
    .then((messageDocuments) => {
      const messageDocument = messageDocuments[0];
      /* Validation Tests */
      const isMessageValid = decryptionTest.checkMessage(messageDocument.message, packageMessage);
      console.log('isMessageValid: ', isMessageValid);
      const isDateValid = decryptionTest.checkDate(messageDocument.expirationDate, packageDate);
      console.log('isDateValid: ', isDateValid);

      if (!isDateValid) res.send('invalidDate'); //  send error package
      if (!isMessageValid) res.send('invalidMessage'); //  send error package
      if (isMessageValid && isDateValid) {
        const decipheredText = decryptionTest.getDecipheredText(messageDocument, packageKey)
        messageDocument.message = decipheredText;
        console.log('messageDocument: ', messageDocument);
        res.send(messageDocument)
      }
    })
    .catch((err) => {
      console.log('ERROR: KEY DOESN"T EXIST', err)
      res.status(400).send('invalidKey');
    });
  })
  .post((req, res) => {
    const encryptionPackage = req.body;
    const message = encryptionPackage.message;
    const key = encryptionPackage.key;

    /* ENCRYPT MESSGE */
    const CipherText = encryptionTest.getCipheredText(message, key);
    encryptionPackage.message = CipherText;

    Message.create(encryptionPackage)
    .then((encryption) => {
      res.send(encryption.message);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  });


module.exports = router;
