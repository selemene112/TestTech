const nums = [2, 7, 11, 15, 3, 6, 8];
const target = 9;

var twoSum = function (nums, target) {
  const hasil = [];
  const complementMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complementMap.has(complement)) {
      hasil.push([nums[i], complement]);
    }

    complementMap.set(nums[i], i);
  }

  return hasil;
};

console.log(twoSum(nums, target));
