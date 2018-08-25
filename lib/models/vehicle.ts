import { load } from 'protobufjs'
import HttpRequest from '../helpers/httpRequest'
import { inflate } from 'pako'

export default class Vehicle {
    static allVehicles () {
        let response: any = { foo:'bar' }

        load('proto/tdi/VehicleTdiArray.proto', (err, root) => {
            if (err)
                throw err

            let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.VehicleTdiArray')
    
            const request = new HttpRequest('/VehicleTDI')
            request.get((res) => {
                var data = inflate(res)
                var buffer = String.fromCharCode.apply(null, new Uint16Array(data))
                console.log('BUFFER:', buffer)

                // res = `vehicleTdiArray {
                //     duid: -6124895490592843817
                //     last_modification_timestamp: 1535196365800
                //     is_deleted: false
                //     category: 5
                //     trip_duid {
                //         structTag: 50471
                //         duid: 3123287315621337630
                //     }
                //     geo_position_status: 1
                //     reference_time: 1535196365
                //     latitude: 169267997
                //     longitude: 27008451
                //     bearing: 111
                //     is_accessible: 1
                //     pattern_duid {
                //         structTag: 50472
                //         duid: 3123280959021386484
                //     }
                //     has_bike_rack: 0
                //     vehicle_number: 3011
                //     operational_number: 3011
                // }`

                let message = VehicleTdiArray.decode(buffer)
                response = VehicleTdiArray.toObject(message)
                console.dir(response)
            })
        })

        console.log(response)
        return response
    }
}
