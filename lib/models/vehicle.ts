var protobuf = require('protobufjs')

export default class Vehicle {
    static allVehicles () {
        protobuf.load('proto/tdi/VehicleTdiArray.proto', (err, root) => {
            if (err)
                throw err
            
            let VehicleTdiArray = root.lookupType('mhcc.app.dataprovider.model.tdiinterface.dstructs.VehicleTdiArray')

            let buffer = `` // Make http request

            let message = VehicleTdiArray.decode(buffer)

            let object = VehicleTdiArray.toObject(message)

            return object
        })
    }
    
    static fromObject (object) {
        let vehicle = new this()
    }
}
