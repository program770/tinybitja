radio.onReceivedNumber(function (receivedNumber) {
    let strip: neopixel.Strip = null
    basic.showNumber(1)
    strip.showRainbow(1, 360)
})
// スタートシステム
// lo
input.onButtonPressed(Button.A, function () {
    basic.showString("1")
    while (0 == 0) {
        if (Tinybit.Ultrasonic_CarV2() < 27) {
            Tinybit.RGB_Car_Big(Tinybit.enColor.White)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 53)
            basic.pause(200)
            Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 60)
            Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        } else {
            Tinybit.Music_Car(Tinybit.enMusic.power_up)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 60)
            Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
            basic.pause(200)
            if (input.buttonIsPressed(Button.B)) {
                Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
                music.stopAllSounds()
                basic.showString("OFF")
                break;
            }
        }
    }
})
// n
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("GO!")
    for (let index = 0; index < 4; index++) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    }
})
// 停止システム
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    music.stopMelody(MelodyStopOptions.All)
    music.setBuiltInSpeakerEnabled(false)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
})
// 基本システム
Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
// システム
basic.forever(function () {
    music.setVolume(41)
    if (Tinybit.Ultrasonic_CarV2() < 15) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    }
    basic.pause(200)
})
basic.forever(function () {
	
})
