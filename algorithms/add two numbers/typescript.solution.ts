class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l1String = "";
  let l2String = "";

  while (l1 !== null) {
    l1String = l1.val + l1String;
    l1 = l1.next;
  }

  while (l2 !== null) {
    l2String = l2.val + l2String;
    l2 = l2.next;
  }

  const sum: string = (BigInt(l1String) + BigInt(l2String)).toString();
  let head: ListNode | null = null;

  for (let i = sum.length - 1; i >= 0; i--) {
    const newNode: ListNode = new ListNode(~~sum[i]);
    if (head) {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      continue;
    }
    head = newNode;
  }

  return head;
}
