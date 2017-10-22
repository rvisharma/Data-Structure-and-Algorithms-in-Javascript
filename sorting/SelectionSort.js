/** 
  Selection sort.
  Time Complexity - O(n²)
  Demo - http://jsbin.com/sijomux/edit?js,console
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
   * in each iteration, find the smallest value index and
   * at the end of each iteration, swap the current index
   * with the smallest value index.
   */
  let current = 0;
  while (current <= secondLast) {
    let smallestIndex = current;

    for (var i = current + 1; i <= last; i++) {
      if (arr[smallestIndex] > arr[i]) {
        smallestIndex = i;
      }
    }

    /**
     * if the first element at unsorted subarray is different
     * than smallest value, swap them
     */
    if (smallestIndex !== current) {
      let smallestVal = arr[smallestIndex];
      arr[smallestIndex] = arr[current];
      arr[current] = smallestVal;
    }

    current++;
  }

  return arr;
}
