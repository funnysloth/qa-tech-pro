function checkProbabilityTheory(count) {
    let evenNumbersAmount = 0
    let oddNumbersAmount = 0
    for(let i = 0; i < count; i++) {
        let rand = Math.random() * 901
        rand = rand + 100
        rand = Math.floor(rand)
        if(rand % 2 == 0) {
            evenNumbersAmount++
        } else {
            oddNumbersAmount++
        }
    }
    const oddRatio = (oddNumbersAmount/count) * 100
    const evenRatio = (evenNumbersAmount/count) * 100
    const oddRatioFormatted = Number.isInteger(oddRatio) ?  oddRatio : oddRatio.toFixed(2)
    const evenRatioFormatted = Number.isInteger(evenRatio) ? evenRatio : evenRatio.toFixed(2)
    return `Кількість згенерованих чисел: ${count}\nПарних чисел: ${evenNumbersAmount}\nНепарних чисел: ${oddNumbersAmount}\nВідсоток парних до не парних: ${evenRatioFormatted}%/${oddRatioFormatted}%`
}

console.log(checkProbabilityTheory(2000))