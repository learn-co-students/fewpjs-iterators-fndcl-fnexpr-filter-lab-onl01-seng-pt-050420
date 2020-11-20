function findMatching(array, str)
{
  let drivers = array.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase();
  });
  return drivers;
}

function fuzzyMatch(array, str)
{
  let drivers = array.filter(driver => {
    let slicedDriver = driver.slice(0, str.length + 1);
    if (slicedDriver.toLowerCase() === str.toLowerCase())
    {
      return driver;
    }
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