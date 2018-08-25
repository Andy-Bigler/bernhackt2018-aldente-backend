export default class Cords {
    lat: number
    lon: number

    constructor (lat, lon) {
        this.lat = lat
        this.lon = lon
    }

    public distanceTo (cords) {
        var R = 6371e3; // metres
        var φ1 = Cords.toRadians(this.lat)
        var φ2 = Cords.toRadians(cords.lat)
        var Δφ = Cords.toRadians(cords.lat - this.lat)
        var Δλ = Cords.toRadians(cords.lon - this.lon)
        
        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        
        var d = R * c;

        return d / 1000
    }

    static toDegrees (angle) {
        return angle * (180 / Math.PI);
    }

    static toRadians (angle) {
        return angle * (Math.PI / 180);
    }
}