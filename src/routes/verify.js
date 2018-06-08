var ses = require('../core/ses')


module.exports = (req, res) =>{
    var params = {
        EmailAddress: req.body.email
    };
    ses.verifyEmailAddress(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });
}