

const router = require('express').Router()
const listVerifiedEmailAddresses = require('./list')
const verifyEmailAddress = require('./verify')
const deleteVerifiedEmailAddress = require('./delete')
const sendRawEmail = require('./send')

router.get('/emails/verified', listVerifiedEmailAddresses);
// router.post('/emails/verified', verifyEmailAddress);
// router.post('/email', sendRawEmail);
// router.delete('/email', deleteVerifiedEmailAddress);




module.exports = router