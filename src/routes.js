// Import controlers
loginController = require("./controllers/loginController");
albumController = require("./controllers/albumController");
apiController = require("./controllers/apiController");

// Match URL's with controllers
exports.appRoute = router => {
    router.get("/login", loginController.getIndex);
    router.post("/login", loginController.postIndex);
    router.get("/myalbums", albumController.getIndex);

    router.get("/api/images/:id", apiController.getImages);
};