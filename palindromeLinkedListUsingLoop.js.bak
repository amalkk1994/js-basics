/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    const formString = (head) => {
        if (head.next !== null) {
            return "" + head.val + formString(head.next);
        } else {
            return head.val + "";
        }
    }
    
    const isPalindromeString = formString(head);
    return (isPalindromeString === isPalindromeString.split("").reverse("").join(""));
};