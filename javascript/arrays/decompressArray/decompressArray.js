const decompressRLElistv1 = (nums) => {
  let frequencyArray = [];
  for (let i = 0; i < nums.length; i + 2) {
    let frequency = nums[i];
    let value = nums[i + 1];
    for (let i = frequency; i > 0; i--) {
      frequencyArray.push(value);
    }
  }
  return frequencyArray;
};

var decompressRLElist = function (nums) {
  const result = [];
  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }
  return result;
};

module.exports = { decompressRLElist, decompressRLElistv1 };
