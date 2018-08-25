import { load } from 'protobufjs'
import HttpRequest from '../helpers/httpRequest'
import { Promise } from 'bluebird';

export default class Stop {
    static allStops () {
        return new Promise(function(resolve, reject) {
          load('proto/tdi/StopTdiArray.proto', (err, root) => {
              if (err)
                  reject(err)

              let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.StopTdiArray')

              const request = new HttpRequest('/StopTDI')
              const MILLIARCSECONDS_IN_DEGREES = 0.00000027777777777778
              request.get((res) => {
                  let stops = VehicleTdiArray.decode(res)['stopTdiArray'];

                  stops = stops.map(stop => {
                      return {
                          name: stop.longName,
                          longitude: stop.longitude * MILLIARCSECONDS_IN_DEGREES,
                          latitude: stop.latitude * MILLIARCSECONDS_IN_DEGREES
                      }
                  })

                  resolve(stops);
              })
          })
        });
    }
}
