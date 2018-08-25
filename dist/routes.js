"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenge_1 = require("./models/challenge");
const vehicle_1 = require("./models/vehicle");
const stop_1 = require("./models/stop");
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        app.route('/challenges')
            .get((req, res) => {
            challenge_1.default.fetchAll().then(function (challenges) {
                let result = challenges.toJSON();
                res.status(200).send({
                    message: result[0].name
                });
            });
        });
        app.route('/vehicles')
            .get((req, res) => {
            vehicle_1.default.allVehicles().then(function (vehicles) {
                res.status(200).send({
                    vehicles
                });
            });
        });
        app.route('/stops')
            .get((req, res) => {
            stop_1.default.allStops().then(function (stops) {
                res.status(200).send({
                    stops
                });
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map