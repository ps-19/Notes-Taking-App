// const square = function(x){
//     return x*x
// }

// const square=(x)=>{
//     return x*x
// }

// const square = (x) => x*x;

// console.log(square(8))

const event={
    name: 'Birthday Party',
    guestList: ['Priyansh','Jen','Andrew'],
    partyGuestList(){
        console.log('Guest List of '+this.name)
        this.guestList.forEach( (guest) => {
            console.log(guest+" is attending the "+this.name)
        })
    }

}

event.partyGuestList()