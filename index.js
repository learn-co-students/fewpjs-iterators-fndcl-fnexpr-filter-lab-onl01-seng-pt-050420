// Code your solution here

function findMatching(array, string){
    return array.filter (a =>
         a.toLowerCase() === string.toLowerCase()
    )

}

function fuzzyMatch(array, string){
    return  array.filter (a =>
        a.slice(0, string.length) === string
    )
}

function matchName(array, string){
  return array.filter (a =>
        a.name === string
    )
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]

console.log(matchName(drivers, "Bobby"))


