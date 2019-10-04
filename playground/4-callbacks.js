// const names = ['Andrew','Jen','Jess']
// const shortNames = names.filter((name) => {
//     return name.length <=4
// })


//  const geoCode =  (address, mycallback) => {
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             longitude:0

//         }

//         mycallback(data)
//     },2000)
// }

// geoCode('Philadelphia', (data) => {
//     console.log(data)
//     console.log('x')
// } )
// console.log('Test')

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


  const add =  (x, y, mycallback) => {
        setTimeout(() => {
        const total = x + y   

         mycallback(total)
         
     },1000)
  }

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})