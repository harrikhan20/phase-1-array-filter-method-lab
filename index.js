// Code your solution here
function findMatching(driverArray, name){
return driverArray.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(driverArray, name){
    return driverArray.filter(person => person[0].toLowerCase() === name[0].toLowerCase())
}

function matchName(driverArray, name){
    return driverArray.filter(person => person.name === name)
}