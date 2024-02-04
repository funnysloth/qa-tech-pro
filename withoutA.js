let regex = /([^a\n]){6,}/gmi

let testString = `SometaSomethASomethasome4asome4A`

console.log(testString.match(regex) || "No matches")