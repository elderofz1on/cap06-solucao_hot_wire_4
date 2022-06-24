input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(100)
    falhas += -1
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
})
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
    falhas = 0
    basic.showNumber(falhas)
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # # #
        # . . . .
        # . . . .
        `)
    basic.pause(200)
    soundExpression.spring.playUntilDone()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.showString("Falhas: ")
    basic.showNumber(falhas)
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    falhas += 1
    basic.showIcon(IconNames.Skull)
    soundExpression.slide.play()
    basic.clearScreen()
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
})
/**
 * Em nosso kit didático INVENTORES você recebe um anel de LED de 12 elementos. Podemos adicionar um elemento visual aos nosso projetos.
 * 
 * https://hackids.com.br/inventores
 */
let falhas = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.showColor(neopixel.colors(NeoPixelColors.Purple))
strip.show()
falhas = 0
basic.showLeds(`
    # # # . #
    # . # . #
    # . # # #
    # . . . .
    # . . . .
    `)
basic.pause(200)
soundExpression.spring.playUntilDone()
basic.clearScreen()
