function flattenIntegers(arr) {
    const flattened = [];
  
    function flattenHelper(arr) {
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
  
        if (Array.isArray(item)) {
          flattenHelper(item);
        } else if (Number.isInteger(item)) {
          flattened.push(item);
        }
      }
    }
  
    flattenHelper(arr);
    return flattened;
  }

  var result = flattenIntegers([[[8], 3], 0, 2, ['bar'], [], [5, [3, 6]]]);
  console.log(result);