


const toys = [

    {
        id: 1,
         name: "Yo-Yo",
        type: "Kinesthetic",
        price: 5.5
        },
     {
        id: 2,
        name: "Jack-in-the-Box",
        type: "Novelty",
        price: 10.52
    },
     {
        id: 3,
        name: "Rubix's Cube",
        type: "Puzzle",
        price: 20.05
    }
]

for (const toy of toys) {
console.log(`The ${toys.type} ${toys.name} costs ${toys.price} dollars.`)
}
