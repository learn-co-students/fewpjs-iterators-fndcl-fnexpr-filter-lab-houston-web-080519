// // Code your solution here
// let driver = ["driver1", "driver2", "driver3"]
// let string = "driver2"

// function findMatching(drivers, string) {
//     let result = drivers.filter(driver => driver === string)
//     return result
// }

// console.log(findMatching(driver, string))

// function fuzzyMatch(drivers, string) {

// }

// function matchName(drivers, string) {

// }


function findMatching(drivers, name){
    let matchedNames = drivers.filter(s => {
        return s.toUpperCase() === name.toUpperCase()
    })
    return matchedNames
}

driverNew = ["Rich", "Josh", "Michael"]
nameNew = "Ri"

function fuzzyMatch(drivers, name){
    let matchedChars = drivers.filter(s => {
        return s.charAt(0) == name.charAt(0) && s.charAt(1) == name.charAt(1);
    })
    return matchedChars
}

console.log(fuzzyMatch(driverNew, nameNew))

function matchName(drivers, name){
    let matchedNames = drivers.filter(s => {
        return s.name === name;
    })
    return matchedNames
} 