function pow(x,y) {
    let result = 1
    let power = y > 0 ? y : 0 - y
    for(let i = 0; i < power; i++) {
        result *= x
    }
    return y > 0 ? result : 1/result;
}

console.log(pow(2, 8))