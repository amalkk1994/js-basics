let dates1 = new Date(2022, 08, 10)
let dates2 = new Date(2022, 08, 14)

let datesDiff = dates2 - dates1

console.log("Difference:", Math.ceil(datesDiff / (1000 * 60 * 60 * 24)))
