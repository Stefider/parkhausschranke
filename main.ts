let Anzahl_Autos = 0
servos.P0.setAngle(0)
Anzahl_Autos = Anzahl_Autos
basic.forever(function () {
    if (Anzahl_Autos < 5 && input.pinIsPressed(TouchPin.P1)) {
        Anzahl_Autos += 1
        servos.P0.setAngle(90)
        basic.pause(500)
        servos.P0.setAngle(0)
    }
})
basic.forever(function () {
    if (Anzahl_Autos > 0 && input.pinIsPressed(TouchPin.P2)) {
        Anzahl_Autos += -1
        servos.P0.setAngle(90)
        basic.pause(500)
        servos.P0.setAngle(0)
    }
})
basic.forever(function () {
    basic.showNumber(Anzahl_Autos)
    if (Anzahl_Autos < 5) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
