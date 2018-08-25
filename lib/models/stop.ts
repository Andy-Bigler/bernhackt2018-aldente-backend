import { load } from 'protobufjs'
import HttpRequest from '../helpers/httpRequest'
import Cords from '../helpers/cords'
import { Promise } from 'bluebird';

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
                  let stops = VehicleTdiArray.decode(res)['stopTdiArray']

                  stops = stops.filter(stop => stop.latitude !== 324000002 && stop.longitude !== 648000002)

                  stops = stops.map(stop => {
                      return {
                          name: stop.longName,
                          longitude: stop.longitude / DEGREES_IN_MILLIARCSECS,
                          latitude: stop.latitude / DEGREES_IN_MILLIARCSECS
                      }
                  })

                  resolve(stops)
              })
          })
        })
    }

    static nearStops (cords, radius) {
        return new Promise(function(resolve, reject) {
            Stop.allStops().then(stopsObj => {
                let stops = []
                Object.keys(stopsObj).forEach(key => {
                    console.log(key)
                    let stop = stopsObj[key]
                    let stopCords = new Cords(stop.latitude, stop.longitude)
                    stop.distance = stopCords.distanceTo(cords)
                    stops.push(stop)
                })
                stops = stops.filter(stop => stop.distance <= radius)
                resolve(stops)
            })
        })
    }
}
