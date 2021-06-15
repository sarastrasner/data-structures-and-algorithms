const runningSum = nums => {
  let newArray = [];
  let runningTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    runningTotal += nums[i];
    newArray.push(runningTotal);
  }
  return newArray;
};


module.exports = runningSum;
