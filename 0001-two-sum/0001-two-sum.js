/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const map = nums.reduce(
		(prev, val, index) => prev.set(val, index),
		new Map()
	);

	for (let i = 0; i < nums.length; i++) {
		const res = map.get(target - nums[i]);
		if (res && res != i) return [i, res];
	}

    
};