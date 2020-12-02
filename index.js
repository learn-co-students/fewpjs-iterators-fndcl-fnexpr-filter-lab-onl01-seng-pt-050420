// Code your solution here
function findMatching(array, search) {

    return array.filter( s => s.toLowerCase() === search.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(s => s.slice(0,string.length).toLowerCase() === string.toLowerCase())
}

function matchName(drivers, string) {
    return drivers.filter(s => s.name === string)
}