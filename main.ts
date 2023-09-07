

namespace GNSS{

    const DEVICE_ADDR = 0x20
    
    function readRegister(reg: GNSS_REG){
        pins.i2cWriteNumber(DEVICE_ADDR, reg, NumberFormat.Int8LE, true)
        let val = pins.i2cReadNumber(DEVICE_ADDR, NumberFormat.UInt8LE, false)
        return val
    }

    function getLongitude() {
        pins.i2cWriteNumber(DEVICE_ADDR, GNSS_REG.I2C_LAT_X_24, NumberFormat.Int8LE, true)
        let LAT_X_24 = pins.i2cReadNumber(DEVICE_ADDR, NumberFormat.UInt8LE, false)
        let LAT_X_16 = pins.i2cReadNumber(DEVICE_ADDR, NumberFormat.UInt8LE, false)
        let LAT_X_8 = pins.i2cReadNumber(DEVICE_ADDR, NumberFormat.UInt8LE, false)
    }

    export function getAltitude() {
        pins.i2cWriteNumber(DEVICE_ADDR, GNSS_REG.I2C_ALT_H, NumberFormat.Int8LE, true)
        let ALT_H = pins.i2cReadNumber(DEVICE_ADDR, NumberFormat.UInt8LE, true)
        let ALT_L = pins.i2cReadNumber(DEVICE_ADDR, NumberFormat.UInt8LE, false)
        return (ALT_H << 8) | ALT_L
    }

}
