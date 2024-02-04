var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro@yahoo.com"
    }
];

let trustedAddressArray = []
const trustedEmailRegex = /^([a-z0-9]*)(\.?[a-z0-9]+)?@(gmail|yahoo)\.com/i

for(let el of arr) {
    if(trustedEmailRegex.test(el.email)){
        trustedAddressArray.push(el.email)
    }
}

console.log(trustedAddressArray)