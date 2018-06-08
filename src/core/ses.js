const aws = require('aws-sdk');
const config = require('../config/mailer.config')
aws.config = {...aws.config, ...config}
console.log('aaaaaaaaa')
const ses = new aws.SES()

module.exports = ses