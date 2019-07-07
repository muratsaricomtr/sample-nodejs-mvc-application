// Import controlers
authController = require("./controllers/authController");
albumController = require("./controllers/albumController");
apiController = require("./controllers/apiController");

// Match URL's with controllers
exports.appRoute = router => {
    router.get("/login", authController.getIndex);
    router.post("/login", authController.postIndex);

    router.get("/logout", authController.getLogout);


    router.get("/myalbums", albumController.getIndex);

    router.get("/api/images/:id", apiController.getImages);
};