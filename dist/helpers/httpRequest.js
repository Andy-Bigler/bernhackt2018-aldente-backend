"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const zlib = require("zlib");
class HttpRequest {
    constructor(path) {
        this.path = path;
        this.options = {
            host: 'tdi.bernmobil.ch',
            path: '/tdinterface' + path,
            port: 12180,
            headers: { 'Accept': "application/x-protobuf", "Accept-Encoding": "gzip" }
        };
    }
    get(callback) {
        // buffer to store the streamed decompression
        let data = [];
        https.get(this.options, (res) => {
            let gunzip = zlib.createGunzip();
            res.pipe(gunzip);
            gunzip.on('data', function (chunk) {
                // decompression chunk ready, add it to the data
                data.push(chunk);
            }).on('end', function () {
                // response and decompression complete, join the buffer and return
                let buffer = Buffer.concat(data);
                callback(buffer);
            }).on('error', function (e) {
                callback(e);
            });
        }).on('error', function (e) {
            callback(e);
        });
    }
}
exports.default = HttpRequest;
//# sourceMappingURL=httpRequest.js.map