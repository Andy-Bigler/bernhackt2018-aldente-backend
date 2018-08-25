"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var challenge_1 = require("./models/challenge");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        app.route('/challenges')
            .get(function (req, res) {
            challenge_1.default.fetchAll().then(function (challenges) {
                var result = challenges.toJSON();
                res.status(200).send({
                    message: result[0].name
                });
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map