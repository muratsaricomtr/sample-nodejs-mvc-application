loginController = require("./controllers/loginController");

exports.appRoute = router => {
    router.get("/login", loginController.getLoginController);
};