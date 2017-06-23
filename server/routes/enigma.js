const express = require('express');
const cryptico = require('cryptico');

const router = express.Router();

const Message = require('../models/Message');


router.route('/')
.post((req, res) => {
  const encryptionPackage = req.body;
  // console.log('encryptionPackage:/api/enigma ', encryptionPackage);

  // ENCRYPTING MESSAGE
  const RSAkey = cryptico.generateRSAKey(encryptionPackage.key, 1024);
  const publicKeyString = cryptico.publicKeyString(RSAkey);
  const EncryptionResult = cryptico.encrypt(encryptionPackage.message, publicKeyString);
  const CipherText = EncryptionResult.cipher;
  console.log('CipherText: ', CipherText);  // eslint-disable-line no-console

  encryptionPackage.message = CipherText;
  // //  DECRYPTING MESSAGE
  // const DecryptionResult = cryptico.decrypt(CipherText, RSAkey);
  // const DecipherText = DecryptionResult.plaintext;
  // console.log('DecipherText: ', DecipherText);  // eslint-disable-line no-console

  Message.create(encryptionPackage)
  .then((encryption) => {
    res.send(encryption.message);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

module.exports = router;
