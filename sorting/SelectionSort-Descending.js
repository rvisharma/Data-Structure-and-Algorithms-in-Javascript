/** 
  Selection sort. - Descending Version
  Time Complexity - O(n²)
  Demo - https://jsbin.com/lujoze/edit?js,console
*/

function selectionSort(unsorted) {
  const arr = [...unsorted];

  if (arr.length < 2) {
    return arr;
  }

  const last = arr.length - 1;
  const secondLast = last - 1;

  /**
   * Iteration over unsorted list n - 2 times
   * in each iteration, find the largest value index and
   * at the end of each iteration, swap the current index
   * with the largest value index.
   */
  let current = 0;
  while (current <= secondLast) {
    let largestIndex = current;

    for (var i = current + 1; i <= last; i++) {
      if (arr[i] > arr[largestIndex]) {
        largestIndex = i;
      }
    }

    /**
     * if the first element at unsorted subarray is different
     * than largest value, swap them
     */
    if (largestIndex !== current) {
      let largestVal = arr[largestIndex];
      arr[largestIndex] = arr[current];
      arr[current] = largestVal;
    }

    current++;
  }

  return arr;
}
