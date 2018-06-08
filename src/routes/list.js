var ses = require('../core/ses')


module.exports = (req, res, next) =>{
    return ses.listVerifiedEmailAddresses((err, data) =>{
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });

}