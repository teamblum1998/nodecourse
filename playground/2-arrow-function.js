// const square = function(x){
//     return x*x
// }

//const square = (x) => {
//     return x*x*x
// } 

//const square = (x) =>  x*x*x

//console.log("answer is " + square(2))

const event = {
    name: 'Birthday Party',
    gestList: ['Sydney','Jack','Luke'],
    printGuestList () {
        this.gestList.forEach((myGuest)=>{
            console.log(myGuest + ' is attending ' + this.name)
        })

    }
}
event.printGuestList()

