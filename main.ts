basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 2)
        basic.pause(250)
    }
    led.toggle(3, 1)
    led.toggle(3, 3)
    basic.pause(250)
    led.toggle(2, 0)
    led.toggle(2, 4)
    basic.pause(500)
    basic.clearScreen()
})
