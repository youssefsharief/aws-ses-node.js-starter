const aws     = require('aws-sdk');

let ses = {}

module.exports =  {
    
    init() {
        aws.config.loadFromPath(__dirname + '/config.json');
        ses = new aws.SES()
    },
    get ses() {
        return ses
    }
    
}