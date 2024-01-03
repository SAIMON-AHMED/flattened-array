function steamrollArray(arr) {

  let array = [];


  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      array.push(...steamrollArray(arr[i]));
    } else {
      array.push(arr[i]);
    }
  }
  return array;
}

steamrollArray([1, [2], [3, [[4]]]]);
