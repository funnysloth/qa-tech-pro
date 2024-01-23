var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",
    price: function() {
        let price = 0
        for(const key in this) {
            if(typeof this[key] === 'number' || typeof this[key] === 'string') {
                price += Number.parseFloat(this[key])
            }
        }
        return price;
    },
    minPrice: function() {
        let minPrice = Infinity
        for(const key in this) {
           if(Number.parseFloat(this[key]) < minPrice) {
               minPrice = Number.parseFloat(this[key])
            }
        }
        return minPrice;
    },
    maxPrice: function() {
        let maxPrice = -Infinity
        for(const key in this) {
           if(Number.parseFloat(this[key]) > maxPrice) {
                maxPrice = Number.parseFloat(this[key])
            }
        }
        return maxPrice;
    }
};

console.log(`Overall price: ${services.price()}`)
console.log('------------------------------')

services['Розбити скло'] = "200 грн";

console.log(`Overall price: ${services.price()}`)
console.log('------------------------------')

console.log(`Min price: ${services.minPrice()}`)
console.log('------------------------------')

console.log(`Max price: ${services.maxPrice()}`)