// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(function(driver, index){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(array,revenue){
  let list = array.filter(function(driver){
    return driver.revenue > revenue
  })
  return list.map(function(driver){
    return driver.name
  })
}

function exactMatch(array, attribute){
  return array.filter(function(driver){
    return driver.revenue == attribute.revenue || driver.name == attribute.name
  })
}

function exactMatchToList(array, attribute){
  return exactMatch(array, attribute).map(function(driver){
    return driver.name
  })
}
