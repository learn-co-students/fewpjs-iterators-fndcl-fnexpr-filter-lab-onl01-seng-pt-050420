// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (array, string) => {
    return array.filter(element => element.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (array, string) => {
    return array.filter(element => element.substring(0, string.length) === string)
}

const matchName = (array, string) => {
    return array.filter(element => element.name === string)
}