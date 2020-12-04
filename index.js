function findMatching(drivers, name){

    let match = drivers.filter(driver => { return driver.toUpperCase() === name.toUpperCase()})

   return match
}

function fuzzyMatch(drivers, query){

    let match = drivers.filter(driver => {return driver[0] === query[0]})

    return match
}

function matchName(drivers, string){
    let match = drivers.filter(driver => {return driver.name === string})

    return match
}