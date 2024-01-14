let age = prompt("Веедіть ваш вік", "20")
let message = ''

if(!isNaN(+age) && +age >= 0){
    if (((+age/10) % 10) > 1 && ((+age/10) % 10) < 2){
        message =  age + " років"
    } else if ((+age % 10) === 1) {
        message = age +" рік"
    } else if ((+age % 10) < 5 && (+age % 10) > 1) {
        message = age + " роки"
    } else {
        message = age + " років"
    }
}
else {
    message = +age < 0 ? "Від'ємне число не може бути віком" : "Відповіддю має бути число"
}
console.log(message)