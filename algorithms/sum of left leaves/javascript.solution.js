/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function sumOfLeftLeaves(root) {
  const iterate = (node, isLeft) => {
    if (!node) return 0;

    if (!node.left && !node.right && isLeft) return node.val;

    return iterate(node.left, true) + iterate(node.right, false);
  };

  return iterate(root, false);
}
