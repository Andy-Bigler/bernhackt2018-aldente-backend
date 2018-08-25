"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protobufjs_1 = require("protobufjs");
const httpRequest_1 = require("../helpers/httpRequest");
const bluebird_1 = require("bluebird");
class Stop {
    static allStops() {
        return new bluebird_1.Promise(function (resolve, reject) {
            protobufjs_1.load('proto/tdi/StopTdiArray.proto', (err, root) => {
                if (err)
                    reject(err);
                let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.StopTdiArray');
                const request = new httpRequest_1.default('/StopTDI');
                const MILLIARCSECONDS_IN_DEGREES = 0.00000027777777777778;
                request.get((res) => {
                    let stops = VehicleTdiArray.decode(res)['stopTdiArray'];
                    stops = stops.map(stop => {
                        return {
                            name: stop.longName,
                            longitude: stop.longitude * MILLIARCSECONDS_IN_DEGREES,
                            latitude: stop.latitude * MILLIARCSECONDS_IN_DEGREES
                        };
                    });
                    resolve(stops);
                });
            });
        });
    }
}
exports.default = Stop;
//# sourceMappingURL=stop.js.map