let age = prompt("Веедіть ваш вік", "20")
let message = ''

if(!isNaN(+age) && +age >= 0){
    message = (((+age/10) % 10) > 1 && ((+age/10) % 10) < 2) ? age + " років" : (+age % 10) === 1 ? age +" рік" : ((+age % 10) < 5 && +age % 10 > 1) ? age + " роки" : age + " років"
}
else {
    message = +age < 0 ? "Від'ємне число не може бути віком" : "Відповіддю має бути числом"
}
console.log(message)