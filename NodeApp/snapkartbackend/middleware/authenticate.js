var config = require("../config/config");
var jwt = require("jwt-simple");

function authenticateUser(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        if (decoded) {
            next();
        } else {
            res.json({
                token: "",
                status: "Failure",
                message: "User not Authenticated"
            })
        }

    } else {
        res.json({
            token: "",
            status: "Failure",
            message: "User not Authenticated"
        })
    }
}
getToken = function(headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
module.exports = authenticateUser;