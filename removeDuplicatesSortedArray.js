/** 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums === null) {
        return 0;
    }
    // we have two pointers, the first pointer is where we want to insert
    let pointer1 = 0;
    // the second pointer is where we are iterating in our array
    // pointer2 = 1
    let prev = null;
    // loop over the array
    for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
        // compare the current item to the previous item
        // if they aren't equal
        if (nums[pointer2] !== prev) {
            // replace value at pointer1 with the current
            nums[pointer1] = nums[pointer2];
            // incrememnt pointer1
            pointer1++;
            // update prev value
            prev = nums[pointer2];
        }
    }

    return pointer1;
};