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
var isPalindrome = function (head) {
  let isPalindromeString = "";
  while (head !== null) {
    isPalindromeString = isPalindromeString + head.val;
    head = head.next;
  }

  //  const isPalindromeString = formString(head);
  return (
    isPalindromeString === isPalindromeString.split("").reverse("").join("")
  );
};
