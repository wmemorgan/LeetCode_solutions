/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*----ITERATIVE APPROACH----*/
var reverseList = function (head) {
    // Edge case check null node or single node list
    if (head === null || head.next === null) return head

    // Initialize node variable to head
    let node = head
    // Initialize next variable
    let next
    // Initialize prev variable to null
    let prev = null

    // Loop while node is not null
    while (node !== null) {
        // Assign node.next to next
        next = node.next
        // Assign prev to node.next
        node.next = prev
        // Assign node to prev
        prev = node
        // Assign next to node
        node = next
    }

    const reversedList = new ListNode(prev.val, prev.next)
    return reversedList
};

/*----RECURSIVE APPROACH----*/
var reverseList = function (head) { 
   // Define base case if head or head.next is null return null
    if (head === null || head.next === null) return head
    // Initialized reversedList by recursively calling function of head.next
    const reversedList = new ListNode(reverseList(head.next))
    // Assign head to head.next.next
    head.next.next = head
    // Assign null to head.next
    head.next = null

    // return reversedList
    return reversedList
}