// Code your solution here
function findMatching(array, search) {

    return array.filter( d => d.toLowerCase() === search.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(d => d.slice(0,string.length).toLowerCase() === string.toLowerCase())
}

function matchName(drivers, string) {
    return drivers.filter(d => d.name === string)
}