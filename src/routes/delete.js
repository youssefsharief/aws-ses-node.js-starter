var ses = require('../core/ses')


module.exports = (req, res, next) =>{
    var params = {
        EmailAddress: req.params.email
    };
    ses.deleteVerifiedEmailAddress(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });

}