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

  let current = 0;
  while (current <= secondLast) {
    let smallestIndex = current;

    for (var i = current + 1; i <= last; i++) {
      if (arr[smallestIndex] > arr[i]) {
        smallestIndex = i;
      }
    }

    if (smallestIndex !== current) {
      let smallestVal = arr[smallestIndex];
      arr[smallestIndex] = arr[current];
      arr[current] = smallestVal;
    }

    current++;
  }

  return arr;
}
