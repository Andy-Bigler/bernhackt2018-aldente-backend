import * as express from 'express';
import {Request, Response} from 'express';

import Challenge from './models/challenge';

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
                let result = challenges.toJSON();
                
                res.status(200).send({
                    message: result[0].name
                })
            });
        })               
    }
}