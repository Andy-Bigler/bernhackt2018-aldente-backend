"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.route = new routes_1.Routes();
        this.app = express();
        this.config();
        this.route.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map