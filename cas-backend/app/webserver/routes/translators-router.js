'use strict';

const express = require('express');

const getTranslator = require('../controllers/translators/get-translator-controller');
const checkAccount = require('../controllers/translators/check-account-controller');
const createProfile = require('../controllers/translators/create-profile');
const updateProfile = require('../controllers/translators/update-profile');

const router = express.Router();

router.get('/translators/:translatorId', getTranslator);
router.post('/translators/:translatorId', checkAccount, createProfile);
router.put('/translators/:translatorId', checkAccount, updateProfile);

module.exports = router;
