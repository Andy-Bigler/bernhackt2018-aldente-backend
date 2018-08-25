import { load } from 'protobufjs'
import HttpRequest from '../helpers/httpRequest'
import { inflate } from 'pako'

export default class Stop {
    static allStops () {
        return new Promise(function(resolve, reject) {
          load('proto/tdi/StopTdiArray.proto', (err, root) => {
              if (err)
                  reject(err)

              let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.StopTdiArray')

              const request = new HttpRequest('/StopTDI')
              const DEGREES_IN_MILLIARCSECS = 3600000
              request.get((res) => {
                  let stops = VehicleTdiArray.decode(res)['stopTdiArray'];

                  stops = stops.map(stop => {
                      return {
                          name: stop.longName,
                          longitude: stop.longitude / DEGREES_IN_MILLIARCSECS,
                          latitude: stop.latitude / DEGREES_IN_MILLIARCSECS
                      }
                  })

                  resolve(stops);
              })
          })
        });
    }
}
