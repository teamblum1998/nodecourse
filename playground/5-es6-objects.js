//
const name = 'Derek Blum'
const userAge = 48

// a property... with the same name as a constant takes the value
const user={
    name,
    age: userAge,
    location:'Philadelphia'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    //rating:2
}

// const label= product.label
// const stock= product.stock
// this is the same as the above.. ie seting the
const {label:productLabel, stock, rating=5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)
