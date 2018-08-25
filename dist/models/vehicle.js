"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protobufjs_1 = require("protobufjs");
const httpRequest_1 = require("../helpers/httpRequest");
const bluebird_1 = require("bluebird");
class Vehicle {
    static allVehicles() {
        return new bluebird_1.Promise(function (resolve, reject) {
            protobufjs_1.load('proto/tdi/VehicleTdiArray.proto', (err, root) => {
                if (err)
                    reject(err);
                let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.VehicleTdiArray');
                const request = new httpRequest_1.default('/VehicleTDI');
                const MILLIARCSECONDS_IN_DEGREES = 0.00000027777777777778;
                request.get((res) => {
                    let vehicles = VehicleTdiArray.decode(res)['vehicleTdiArray'];
                    vehicles = vehicles.map(vehicle => {
                        return {
                            longitude: vehicle.longitude * MILLIARCSECONDS_IN_DEGREES,
                            latitude: vehicle.latitude * MILLIARCSECONDS_IN_DEGREES
                        };
                    });
                    resolve(vehicles);
                });
            });
        });
    }
}
exports.default = Vehicle;
//# sourceMappingURL=vehicle.js.map