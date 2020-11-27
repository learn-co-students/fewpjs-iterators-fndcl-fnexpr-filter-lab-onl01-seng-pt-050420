function findMatching(drivers, driverList) {
    return drivers.filter(n => n.toLowerCase() === driverList.toLowerCase());
}

function fuzzyMatch(drivers, driverList) {
    return drivers.filter(n => n.toLowerCase().indexOf(driverList.toLowerCase()) === 0)

}

function matchName(drivers, driverList) {
    return drivers.filter(n => n.name === driverList);
}
