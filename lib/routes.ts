import * as express from 'express';
import {Request, Response} from 'express';

import Challenge from './models/challenge';
import Vehicle from './models/vehicle';
import Stop from './models/stop';

export class Routes {       
    public routes(app: express.Application): void {          
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        app.route('/challenges')
        .get((req: Request, res: Response) => {
            Challenge.fetchAll().then(function(challenges) {
                let result: Challenge[] = challenges.toJSON();
                
                res.status(200).send({
                    challenges: result
                })
            });
        })
        app.route('/vehicles')
        .get((req: Request, res: Response) => {
            Vehicle.allVehicles().then(function(vehicles) {
                res.status(200).send({
                    vehicles
                })
            })
        })
        app.route('/stops')
            .get((req: Request, res: Response) => {
                Stop.allStops().then(function(stops) {
                    res.status(200).send({
                        stops
                    })
                })
            })
    }
}