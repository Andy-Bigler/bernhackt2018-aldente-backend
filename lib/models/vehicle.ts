import { load } from 'protobufjs'
import HttpRequest from '../helpers/httpRequest'
import Cords from '../helpers/cords'
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

    static nearVehicles (cords, radius?: number, max?: number) {
        return new Promise(function(resolve, reject) {
            Vehicle.allVehicles().then(vehiclesObj => {
                let vehicles = []
                Object.keys(vehiclesObj).forEach(key => {
                    let vehicle = vehiclesObj[key]
                    let vehicleCords = new Cords(vehicle.latitude, vehicle.longitude)
                    vehicle.distance = vehicleCords.distanceTo(cords)
                    vehicles.push(vehicle)
                })
                if (radius) {
                    vehicles = vehicles.filter(vehicle => {
                        return vehicle.distance <= radius
                    })
                }
                vehicles.sort((a, b) => a.distance - b.distance)
                if (max) vehicles.splice(max)
                resolve(vehicles)
            })
        })
    }
}
