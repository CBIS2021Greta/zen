let Time = 0
let Wobble = 0
loops.everyInterval(1000, function () {
    Time += 1
})
loops.everyInterval(1000, function () {
    if (input.acceleration(Dimension.X) > (input.acceleration(Dimension.X) < -500)) {
        Time += 1
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    led.plotBarGraph(
    Wobble,
    10
    )
    if (Wobble > 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
	
})
