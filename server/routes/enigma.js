const express = require('express');

const router = express.Router();

const Message = require('../models/Message');

router.route('/')
  .post((req, res) => {
    const encryptionPackage = req.body;
    console.log('encryptionPackage:/api/enigma ', encryptionPackage);
    Message.create(req.body)
    .then((newMessage) => {
      res.send(newMessage);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  });

module.exports = router;
