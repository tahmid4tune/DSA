import { Node } from "./Node";

/*
Example Binary tree:
             1
            / \
           2   3
          / \
         4   5
*/
class BinaryTree {
  root: Node | null = null;

  /**
   * Insertion method within the tree;
   * Idea is to assign ROOT node if the tree is empty;
   * Otherwise use a queue and insert the root as the first node
   * Then try to insert left to right nodes
   * If left node is empty, insert new node to the left of the current node and stop there;
   * Otherwise, add the left node to the queue
   * If right node is empty, insert new node to the right of the current node and stop there;
   * Otherwise, add the right node to the queue
   */
  insert(data: number) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue: (Node | null)[] = [this.root];
    while (queue.length) {
      const temp = queue.shift()!;
      if (!temp.left) {
        temp.left = newNode;
        break;
      } else queue.push(temp.left);

      if (!temp.right) {
        temp.right = newNode;
        break;
      } else queue.push(temp.right);
    }
  }

  /**
   * Inorder: print/output at the middle
   */
  inorder(node: Node | null = this.root): void {
    if (!node) return;
    this.inorder(node.left);
    process.stdout.write(node.data + " ");
    this.inorder(node.right);
  }

  /**
   * Postder: print/output at the end
   */
  postOrder(node: Node | null = this.root): void {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    process.stdout.write(node.data + " ");
  }

  /**
   * Preder: print/output at the beginning
   */
  preOrder(node: Node | null = this.root): void {
    if (!node) return;
    process.stdout.write(node.data + " ");
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log("Inorder traversal:");
tree.inorder();
console.log("======================");

console.log("PreOrder traversal:");
tree.preOrder();
console.log("======================");

console.log("PostOrder traversal:");
tree.postOrder();
console.log("======================");
