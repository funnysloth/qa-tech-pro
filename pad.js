function pad(string, symbol=' ', ltargetLngth, start) {
    if(ltargetLngth <= string.length || String(symbol).length === 0) return string;
    let addedtString = ''
    let symbolStringified = String(symbol)
    const addedLength = ltargetLngth - string.length
    for(let i = 0; i < addedLength; i+= symbolStringified.length) {
        if(i + symbolStringified.length > addedLength ) {
            addedtString += symbolStringified.slice(0, addedLength - i)
        } else {
            addedtString += symbolStringified
        }
    }
    return start ? addedtString + String(string) : String(string) + addedtString
}

console.log(pad('Pass', "*", 8, false))