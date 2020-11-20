function findMatching(array, str)
{
  let drivers = array.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase();
  });
  return drivers;
}

function fuzzyMatch(array, str) {
  let drivers = array.filter(driver => {
    driver.toLowerCase().indexOf(str.toLowerCase()) === 0
  });
  return drivers;
}

function matchName(array, str)
{
  let drivers = array.filter(driver => {
    return driver.name.toLowerCase() === str.toLowerCase();
  });
  return drivers;
}