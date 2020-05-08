/*
1. Can I restate the problem in my own words?
    TAKE 2 SORTED LINKED LISTS AND MERGE THEM INTO 1 SORTED LINKED LIST
2. What are the input that go into the problem?
    - Confirm required data types (string, integers, floats, arrays, objects)
    LINKED LIST WITH INTEGERS AS NODE VALUES
	- Can negative numbers be included? POSSIBLY
  - Confirm upper/lowercase enforcement N/A
	- Confirm whitespace and punctuation N/A
    - Confirm if each argument must be the same length (strings and arrays)
    VARIABLE LENGTHS
    - Confirm upper and lower bound limits of integers and floating points
    NOT SPECIFIED
3. What are the outputs that should come from the solution to the problem?
    - Identify data types for output(s)
    LINKED LIST WITH INTEGERS FOR NODE VALUES
4. Can the outputs be determined from the inputs? YES
5. Any time or space constraints with the solution?*** DO A NAIVE/BRUTE FORCE SOLUTION FIRST
6. How should I label the important pieces of data that are part of the problem?
    mergedList (linked list), minNode (integer), maxNode (integer)
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*-----PREVIOUSLY SUBMITTED SOLUTION-----*/
var mergeTwoLists = function (l1, l2) {
    // Edge case handling
    if (!l1 || !l2) return l1 || l2

    // Create starting point
    let newList = new ListNode()
    // Track prev node
    let prev = newList
    // Loop while both nodes have values
    while (l1 && l2) {
    // If ll1 is smaller than ll2
        if (l1.val < l2.val) {
            // Save l1 to prev.next
            prev.next = l1
            // Advance to next l1 node
            l1 = l1.next
        } else {
            // Save l2 to prev.next
            prev.next = l2
            // Advance to next l2 node
            l2 = l2.next
        }
        // Advance to next node
        prev = prev.next
        
    }
    // Assign remaining nodes
    prev.next = l1 || l2

    return newList.next

};


/*----PREVIOUSLY SUBMITTED ALGORITHM----*/
// Create starting point
// Track prev node
// Loop while both nodes have values
    // If l1 value is less to l2 value
        // Assign l1 to prev.next
        // Advance to next l1 node
    // else
        // Assign l2 to prev.next
        // Advance to next l2 node
    // Advance to next node
    // Assign remaining nodes



/*----MY ATTEMPTED ALGORITHM----*/
// Traverse both linked list
// Track minNode and maxNode
// Initialize newNode with min 
// Loop while either node has a value
// If both nodes have values
    // If ll1 is smaller than ll2
        // save ll1 next node to currentNode
        // change ll1 next pointer to ll2 node
    // if 112 is smaller than ll1
        // save ll2 next node to currentNode
        // change ll2 next pointer to 11 node
    // if ll1 and ll2 values are equal
        // Compare next.val of ll1 and 112
        // if both are equal 
            // save ll1 next node to currentNode

// If only one of the nodes has a value
    // Choose remaining value

// Advance to next node
