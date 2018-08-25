import { load } from 'protobufjs'
import HttpRequest from '../helpers/httpRequest'
import { inflate } from 'pako'

export default class Vehicle {
    static allVehicles () {
        return new Promise(function(resolve, reject) {
          load('proto/tdi/VehicleTdiArray.proto', (err, root) => {
              if (err)
                  reject(err)

              let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.VehicleTdiArray')

              const request = new HttpRequest('/VehicleTDI')
              const MILLIARCSECONDS_IN_DEGREES = 0.00000027777777777778
              request.get((res) => {
                  let vehicles = VehicleTdiArray.decode(res)['vehicleTdiArray'];

                  vehicles = vehicles.map(vehicle => {
                      return {
                          longitude: vehicle.longitude * MILLIARCSECONDS_IN_DEGREES,
                          latitude: vehicle.latitude * MILLIARCSECONDS_IN_DEGREES
                      }
                  })

                  resolve(vehicles);
              })
          })
        });
    }
}
