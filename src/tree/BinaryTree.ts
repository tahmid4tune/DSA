class Node {
  data: number;
  left: Node | null;
  right: Node | null;

  constructor(item: number) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: Node | null = null;

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

  inorder(node: Node | null = this.root): void {
    if (!node) return;
    this.inorder(node.left);
    process.stdout.write(node.data + " ");
    this.inorder(node.right);
  }

  postOrder(node: Node | null = this.root): void {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    process.stdout.write(node.data + " ");
  }

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
