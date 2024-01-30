function myBlend(arr) {
    let usedIndexes = []
    let newIndex
    let initialLength = arr.length
    for(let i = 0; i < initialLength; i++) {
        do {
            newIndex = Math.floor(Math.random() * initialLength) + initialLength
        } while(usedIndexes.includes(newIndex))
        usedIndexes.push(newIndex)
        arr[newIndex] = arr[i]
    }
    arr.splice(0, initialLength)
    return arr
}

console.log(myBlend(["some", 5, true, "test", undefined, 5, "something"]))