const person = {
    sex: "male",
    adult: true,
    age: 22,
    getInfo: function(object=this, tabulation=0) {
        for(const key in object) {
            if(typeof object[key] !== "function" && typeof object[key] !== 'object') {
                console.log(`${'\t'.repeat(tabulation)}${key}: ${object[key]}`)
            } else if(typeof object[key] === 'object') {
                console.log(`${'\t'.repeat(tabulation)}${key}: {`)
                this.getInfo(object[key], tabulation+1)
                console.log(`${'\t'.repeat(tabulation)}}`)
            }
        }
    }
}

person.getInfo()
console.log('------------------------------')

person.job = {
    title: "QA",
    compensationRate: 1000,
    getSalary: function() {
        return this.compensationRate
    }
}

person.married = false

person.getInfo()
console.log('------------------------------')

person.family = {
    mom: {
        age: 50,
        name: "Olena"
    },
    dad: {
        age: 55,
        name: "Oleksabdr"
    }
}

person.getInfo()