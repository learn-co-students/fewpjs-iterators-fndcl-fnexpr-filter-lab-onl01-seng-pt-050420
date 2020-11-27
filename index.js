// let arr = [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'sarah', 'bobby' ];

// names changed but same function
function findMatching(arr, arrelement){
    return arr.filter(whatyourlookingfor => 
    whatyourlookingfor.toLowerCase() === arrelement.toLowerCase()
    )
}

//Same Function different names to simplify it 
// function fuzzyMatch(arr, stringExampleForSearch){
//     debugger
//     return arr.filter(whatyourlookingfor =>
//         whatyourlookingfor.toLowerCase().indexof(stringExampleForSearch.toLowerCase()) === 0
//     )
// }
function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  //Matching name in record, pass in any object/element "whatYourLookingFor.nameInRecord" then match it with an element in array
function matchName(arr, arrelement){
  return arr.filter( whatYourLookingFor => whatYourLookingFor.name === arrelement )
}