// Code your solution here

function findMatching(drivers, str) {
    return drivers.filter(n => { return n.toLowerCase() === str.toLowerCase() } );
};

function fuzzyMatch(drivers, str) {
    return drivers.filter(n => { return n.substring(0, str.length) === str} )
};

function matchName(drivers, str) {
    return drivers.filter(n => { return n.name === str } )
};