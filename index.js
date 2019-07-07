const express = require("express");
let app = express();

//Session
const session = require("express-session");
app.use(session({secret: 'session-secret-key'}));

//Server Settings
const PORT = 5000;
const path = require("path");
const bodyParser = require("body-parser");
const bootstrap = require("./src/bootstrap");


//Pug Template Engine
app.set("view engine", "pug");
app.set("views", path.resolve("./src/views"));

//Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Express Router
const router = express.Router();
app.use(router);
const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

bootstrap(app, router);

//Index Page
router.get("/", (req, res, next) => {
    res.writeHead(301, { Location: '/login' });
    res.end();
});

router.use((err, req, res, next) => {
    if (err) {
        //Handle file type and max size of image
        return res.send(err.message);
    }
});

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
});
