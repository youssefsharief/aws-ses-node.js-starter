var ses = require('../core/ses').ses


module.exports = (req, res, next) =>{
    ses.listVerifiedEmailAddresses(function(err, data) {
        if(err) {
            console.log('aaaaa')
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });

}