/**
 * @param {number[]} nums
 * @return {number}
 */
/*----MY 3RD APPROACH----*/

var singleNumber = function (nums) {
	const uniqueNum = {};

	for (let num of nums) {
		if (uniqueNum.hasOwnProperty(num)) {
			delete uniqueNum[num];
		} else {
			uniqueNum[num] = true;
		}
	}

	return Object.keys(uniqueNum)[0];
};

/*----MY 2ND APPROACH----
//TIME = O(n*m)
//SPACE = O(n)
var singleNumber = function(nums) {
    const uniqueNum = []
    
    for (let num of nums) {
        if (uniqueNum.includes(num)) {
            uniqueNum.splice(uniqueNum.indexOf(num),1)
        } else {
            uniqueNum.push(num)
        }
    }


    return uniqueNum[0]
};
*/

/*---MY 1ST APPROACH---
//TIME = O(n+m) 
//SPACE = O(n+m)
var singleNumber = function(nums) {
    const map = {}
    
    for (let num of nums) {
        if (map.hasOwnProperty(num)) {
            map[num]++
        } else {
            map[num] = 1
        }
    }

    const uniqueNum = Object.entries(map).filter(el => el[1] === 1)[0][0]

    return uniqueNum
};
*/
