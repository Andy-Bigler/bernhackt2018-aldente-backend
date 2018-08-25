import { load } from 'protobufjs'
import HttpRequest from '../helpers/httpRequest'
import { Promise } from 'bluebird';

export default class Vehicle {
    static allVehicles () {
        return new Promise(function(resolve, reject) {
          load('proto/tdi/VehicleTdiArray.proto', (err, root) => {
              if (err)
                  reject(err)

              let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.VehicleTdiArray')

              const request = new HttpRequest('/VehicleTDI')
              const DEGREES_IN_MILLIARCSECS = 3600000
              request.get((res) => {
                  let vehicles = VehicleTdiArray.decode(res)['vehicleTdiArray'];

                  vehicles = vehicles.map(vehicle => {
                      return {
                          longitude: vehicle.longitude / DEGREES_IN_MILLIARCSECS,
                          latitude: vehicle.latitude / DEGREES_IN_MILLIARCSECS
                      }
                  })

                  resolve(vehicles);
              })
          })
        });
    }
}
