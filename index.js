// Code your solution here

function findMatching(array, string){
  let x =  array.filter (a =>{
        return a.toLowerCase() === string.toLowerCase()
    })
 return x
}

function fuzzyMatch(array, string){
    let x =  array.filter (a =>{
        return a.slice(0, string.length) === string
    })
 return x
}

function matchName(array, string){
    let x =  array.filter (a =>{
        return a.name === string
    })
 return x
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


