class Product {
    constructor(name, price) {

        this.name = name
        this.price = price
    }

    displayProduct = function () {
        console.log(`Product: ${this.name}`)
        console.log(`Price: U$ ${this.price}`)
    }

    calculateTotal = function () {
        return (this.price + (this.price * salesTax)).toFixed(2)
    }
}

const salesTax = 0.05

const prod1 = new Product('shirt', 19.99)
const prod2 = new Product('shoes', 89.99)
const prod3 = new Product('cap', 39.99)
const prod4 = new Product('pants', 29.99)

prod1.displayProduct()
console.log(`Final price: U$ ${prod1.calculateTotal()}`)

prod2.displayProduct()
console.log(`Final price: U$ ${prod2.calculateTotal()}`)
