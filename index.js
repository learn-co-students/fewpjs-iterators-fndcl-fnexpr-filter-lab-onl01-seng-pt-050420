// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

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
  ];

function findMatching(arr, name){
    return arr.filter(n => n.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(arr, letters){
    return arr.filter(n => n.toLowerCase().indexOf(letters.toLowerCase()) === 0)
};

function matchName(arr, string){
    return arr.filter(n => n.name === string )
};