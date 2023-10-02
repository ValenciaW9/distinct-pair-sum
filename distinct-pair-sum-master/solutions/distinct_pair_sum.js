function consecutivePairs(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] + arr[i+1] === k && !result.some(pair => pair[0] == arr[i] && pair[1] == arr[i+1])) {
  result.push([arr[i], arr[i+1]]);
  }
  }
  return result;
  }
  
  // Test Cases
  console.log(consecutivePairs([0, 1, 1, 2, 0, 1, 1], 2)); // Output: [[1, 1], [2, 0]]
  console.log(consecutivePairs([3, 4, 2, 1, 5, 2, 8, 2], 10)); // Output: [[2, 8]]
  



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log(distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([], 100));

  console.log("");

  console.log("Expecting: [[59, 41]]");
  console.log(distinctPairSum([59, 41], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([59], 100));

  console.log("");

  console.log("Expecting: [[0, 0], [10, -10], [3, -3]]");
  console.log(distinctPairSum([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
/***********************************************************************************
 * initialize empty object called pairs
 * nitialize an empty result list.
Iterate through the input array from index 0 to n-2.
Check if the sum of the current number and the next number is equal to the target value.
If it is, check if the pair [current number, next number] is already present in the result list.
If it is not, add the pair to the result list.
Return the result list.
 * iterate over array up to second to last item:
 *  if current item and next item are not keys in pairs and they sum to k:
 *    add current item as key in pairs with value of [current item, next item]
 * 
 * return values stored in pairs
************************************************************************************/

// And a written explanation of your solution
/***********************************************************************************
 * Objects only allow keys with unique values. If we iterate over the array, and on 
 * each iteration, check if the current value and next value add up to k, we can then
 * check if either of those values is a key in pairs. If neither is a key in pairs, we
 * add the current element being iterated over as the key and the pair as the value. 
 * When the iteration is over, we just return the values from pairs.
 ************************************************************************************/