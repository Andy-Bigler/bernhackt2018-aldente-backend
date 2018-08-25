import * as https from 'https';
import * as zlib from "zlib";

export default class HttpRequest{
    path: string;
    options;

    constructor(path: string) {
        this.path = path;

        this.options = {
            host: 'tdi.bernmobil.ch',
            path: '/tdinterface' + path,
            port: 12180,
            headers: { 'Accept': "application/x-protobuf", "Accept-Encoding": "gzip" }
        }
    }

    public get(callback: (res: any) => any): void {
        // buffer to store the streamed decompression
        let data = [];

        https.get(this.options, (res): void => {
            let gunzip = zlib.createGunzip();
            res.pipe(gunzip);

            gunzip.on('data', function(chunk) {
                // decompression chunk ready, add it to the data
                data.push(chunk)

            }).on('end', function() {
                // response and decompression complete, join the buffer and return
                let buffer = Buffer.concat(data);
                callback(buffer);

            }).on('error', function(e) {
                callback(e);
            })
        }).on('error', function(e) {
            callback(e)
        });
    }
}