let array = [1,2,3];

const reverseArray = array => {
  let invertedArray = [];
  for (let i=0;i<array.length; i++){
    invertedArray.unshift(array[i]);
  }
  return invertedArray;
};

reverseArray(array);

