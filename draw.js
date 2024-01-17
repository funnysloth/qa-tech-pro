function drawTriangleUsingWhile(amountOfRows, symbol) {
    let row = symbol
    let i = 0
    while(i < amountOfRows) {
        console.log(row)
        row += symbol
        i++
    }
}

function drawTriangleUsingFor(amountOfRows, symbol) {
    let row = symbol
    for(let i = 0; i < amountOfRows; i++){
        console.log(row)
        row += symbol
    }
}

drawTriangleUsingWhile(4, '*')
console.log('-------------------------------------------')
drawTriangleUsingFor(5, '+')