function findMatching(drivers, string) {
    return drivers.filter( e => e.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( e => e.slice(0,string.length).toLowerCase() === string.toLowerCase())
}

function matchName(drivers, string) { 
    return drivers.filter( e => e.name === string )
}
    
