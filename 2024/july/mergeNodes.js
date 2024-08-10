/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeNodes = function (head) {
  let p1 = head.next;
  let p2 = p1;

  while (p2 != null) {
    let sum = 0;

    while (p2 != null && p2.val !== 0) {
      sum += p2.val;
      p2 = p2.next;
    }

    p1.val = sum;
    p2 = p2.next;
    p1.next = p2;
    p1 = p1.next;
  }
  return head.next;
};

// Helper function to convert array to linked list
function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print linked list
function printList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Create linked list from array
let arr = [0, 3, 1, 0, 4, 5, 2, 0];
let head = arrayToList(arr);

// Call mergeNodes and print the result
let mergedHead = mergeNodes(head);
printList(mergedHead);
