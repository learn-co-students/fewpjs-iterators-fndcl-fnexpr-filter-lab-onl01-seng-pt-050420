// Code your solution here
function findMatching(drivers, name){
    return drivers.filter( driver => driver.toLowerCase() === name.toLowerCase() )
    
}


  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

function matchName(haha, name){
  return haha.filter(actualObj => actualObj.name === name)
}

