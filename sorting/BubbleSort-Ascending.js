/** 
  Bubble sort. - Ascending Version
  Time Complexity - O(n²)
  Demo - https://jsbin.com/xisegob/edit?js,console
*/

function bubbleSort(unsorted) {
  const arr = [...unsorted];
  const len = arr.length;
  if (arr.length < 2) {
    return arr;
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let isSorted = false;
  let lastUnsorted = len - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
  return arr;
}

console.log(bubbleSort([111, 25, 188, 95]));
