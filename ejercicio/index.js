const BACKGROUND =  "#101010"
const FOREGROUND = "#50FF50"

console.log(graphics)
graphics.width = 800
graphics.height = 800
const ctx = graphics.getContext("2d")
console.log(ctx)

function clear() {
    ctx.fillStyle = BACKGROUND
    ctx.fillRect(0, 0, graphics.width, 
graphics.height)
}

function point(x, y){
    const s = 20
    ctx.fillStyle = FOREGROUND
    ctx.fillRect(x-s/2, y-s/2, s, s)
}

clear()
point(10, 10)
