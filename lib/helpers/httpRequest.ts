import * as https from 'https';

export default class HttpRequest{
    path: string;
    options;

    constructor(path: string) {
        this.path = path;

        this.options = {
            host: 'tdi.bernmobil.ch',
            path: '/tdinterface' + path,
            port: 12180,
            method: 'GET',
            headers: { 'Accept': "application/x-protobuf", "Accept-Encoding": "gzip" }
        }
    }

    public get(cb: (res: any) => any): void {
        https.request(this.options, (r): void => {
            let data = '';
            r.on('data', (chunk: string): void => {
                console.log('Got chunk');
                data += chunk;
            });
            r.on('end', (): void =>{
                console.log('Response has ended');
                cb(data);
            });
            r.on('error', (err): void => {
                console.log('Following error occured during request:\n');
                console.log(err);
            })
        }).end();
    }
}