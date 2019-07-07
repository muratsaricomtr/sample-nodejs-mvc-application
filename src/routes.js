loginController = require("./controllers/loginController");
albumController = require("./controllers/albumController");

exports.appRoute = router => {
    router.get("/login", loginController.getIndex);
    router.post("/login", loginController.postIndex);
    router.get("/myalbums", albumController.getIndex);
};