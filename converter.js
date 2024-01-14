let measurementUnit = 'дециметри'
let value = 2
let convertedValue
let message = ''

switch (measurementUnit) {
    case 'кілометри':
        convertedValue = value * 1000
        message = value + ' км це ' + convertedValue + ' м'
        break;
    case 'години':
        convertedValue = value * 60
        message = value + ' г це ' + convertedValue + ' хв'
        break;
    case 'кілограми':
        convertedValue = value * 1000
        message = value + ' кг це ' + convertedValue + ' грм'
        break;
    default:
        message = 'Наразі дана одиниця вимірювання не підтримується конвертером'
}

console.log(message)