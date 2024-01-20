function isNaN(value) {
    return +value === 0 ? false : !+value
}

console.log(isNaN('32'))