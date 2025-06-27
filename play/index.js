// const data = [
//     {
//         name: "Nishan"
//     },
//     {
//         name: "Alisha"
//     }
// ]

// console.log(data[0].name)

// data.map((val) => {
//     console.log(val.name)
// })


const users = [
    {
        userId: "usr_abc123xyz",
        username: "john_doe",
        address: { city: "Anytown" }
    },
    {
        userId: "usr_def456uvw",
        username: "jane_doe",
        address: { city: "Otherville" }
    }
];

// Now you can use map to get an array of just the cities
const userCities = users.map((u) => {
    return u.address.city;
});

console.log(userCities); // Outputs: [ 'Anytown', 'Otherville' ]