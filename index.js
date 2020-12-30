// Code your solution here
function findMatching(names, name) {
    return names.filter(x => x.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(names, letters) {
    return names.filter(x => x.toLowerCase().substring(0, letters.length) === letters.toLowerCase())
}

function matchName(data, name) {
    return data.filter(x => x.name === name)
}