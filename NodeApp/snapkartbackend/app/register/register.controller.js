var registerCtrl = {};

registerCtrl.get = function(req, res) {
    res.render("register", { showSuccess: false });
};

registerCtrl.post = function(req, res) {
    console.log(req.body);
    res.render("register", { showSuccess: true });
}
module.exports = registerCtrl;