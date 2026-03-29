//Given an integer array nums, 
// return the largest integer 
// that only occurs once. 
// If no integer occurs once, return -1.

function largestUniqueNumber(nums) {
        let max = -1; 
        let map1 = {};

    
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            map1[num] = (map1[num] || 0) + 1;
        }


        for (let key in map1) {
            if (map1[key] === 1) {
                let currentNum = Number(key);
                

                if (currentNum > max) {
                    max = currentNum;
                }
            }
        }

        return max;
    }