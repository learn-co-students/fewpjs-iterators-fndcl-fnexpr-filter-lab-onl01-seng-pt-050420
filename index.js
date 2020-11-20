// Code your solution here
function findMatching(arr, str) {
    return arr.filter(n => n.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str) {
    return arr.filter(n => 
        n.toLowerCase().indexOf(str.toLowerCase()) === 0
    )
}

function matchName(arr, str) {
    return arr.filter( (n) => n.name === str )
}