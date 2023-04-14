function compareArrays(arr1, arr2) {
    let compareNums = arr1.length === arr2.length && arr1.every((num, index) => num === arr2[index]);
  return compareNums;
  }

function getUsersNamesInAgeRange(users, gender) {
  let peoplesFilter = users.filter(user => user.gender === gender);
  let sumAges = peoplesFilter.map(user => user.age).reduce((acc, userAge) => acc + userAge, 0);
    if(isNaN((sumAges / peoplesFilter.length))) {
    return 0;
  }
  return (sumAges / peoplesFilter.length);
}