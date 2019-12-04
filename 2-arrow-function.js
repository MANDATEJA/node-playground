// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(9))

const event = {
    name: 'Birthday party',
    guestList: ['Teja','Sachin','Vishwas'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((Guest) => {
            console.log(Guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()