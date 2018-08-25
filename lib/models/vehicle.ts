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
              request.get((res) => {
                  let response = VehicleTdiArray.decode(res);
                  resolve(response['vehicleTdiArray']);
              })
          })
        });
    }
}
