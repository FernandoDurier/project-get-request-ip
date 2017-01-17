var requestIp = require('request-ip');

exports.ip = function(req, res, next) {
    var clientIp = requestIp.getClientIp(req); 
    next();
};