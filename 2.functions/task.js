function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);  
  let sum = arr.reduce((acc, num) => (acc + num)); 
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  
  for(i = 0; i < arr.length; i++) {
  sum += arr[i]; 
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  if (arr.length === 0) {
    return 0;
  }
  return (max - min); 
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else  {
      sumOddElement += arr[i];
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
    return (sumEvenElement / countEvenElement);
}  

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let res = func (...arrOfArr[i]);
    if ( res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
