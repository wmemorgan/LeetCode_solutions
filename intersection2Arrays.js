/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */



/**
 * MY 2ND APPROACH
 * Find long and short lists
 * Declare intersection array
 * Map the long list to a hashtable add occurrences as value
 * Iterate through short list
 * 	If letter found
 * 	Append to intersection
 * 	Deduct occurrence
 * 	if map property value is 0 delete from map
 * Return intersection array
 */
var intersect = function(nums1, nums2) {
    const longList = nums1.length >= nums2.length ?  nums1 : nums2
    const shortList = nums1.length < nums2.length ? nums1 : nums2
    const intersection = []
    const map = {}
    
    for (let i = 0; i < longList.length; i++) {
        if (!map.hasOwnProperty(longList[i])) {
            map[longList[i]] = 1
        } else {
            map[longList[i]]++
        }
    }
    
    for (let i = 0; i < shortList.length; i++) {
        if(map.hasOwnProperty(shortList[i])) {
            intersection.push(shortList[i])
            map[shortList[i]]--
            
            if (map[shortList[i]] === 0) {
                delete map[shortList[i]]
            }
        }
    }
    
    return intersection
};


 /**
  * MY 1ST APPROACH
  * Map nums1 to a set
  * Iterate through nums2
  * Filter out elements not in map
  */

// var intersection = function (nums1, nums2) {
// 	// Edge case: empty array
// 	if (nums1.length === 0 || nums2.length === 0) return [];

// 	const num1Map = new Set();
// 	for (let num of nums1) {
// 		num1Map.add(num);
// 	}

// 	const num2Map = new Set();
// 	for (let num of nums2) {
// 		num2Map.add(num);
// 	}

// 	const intersection = [];
// 	for (let num of num2Map.values()) {
// 		if (num1Map.has(num)) intersection.push(num);
// 	}

// 	return intersection;
// };
