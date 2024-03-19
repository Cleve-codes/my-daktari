/*
 * Complete the 'arrayChallenge' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts LONG_INTEGER_ARRAY arr as parameter.
 */

/**
 *
 * For each element of an array, a counter is set to 0, the element is compared
 * to each element to its left. If the element to the left is greater, the absolute
 * difference is subtracted from the counter.If the element to the left is less the
 * absolute difference is added to the counter. For each element of the array, determine
 * the value of the counter. These values should be stored in an array and returned
 */

/**
 *
 * Explanation
 * if 1st elem has none to left so counter = 0
 *
 */

function arrayChallenge(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        counter -= Math.abs(arr[j] - arr[i]);
      }
    }

    result.push(counter);
  }

  return result;
}
