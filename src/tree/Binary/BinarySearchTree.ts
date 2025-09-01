import { Node } from "./Node";

class BST {
  root: Node | null = null;

  // Insert node in BST
  insert(data: number): void {
    this.root = this._insertRec(this.root, data);
  }

  private _insertRec(root: Node | null, data: number): Node {
    if (root === null) {
      return new Node(data);
    }
    if (data < root.data) {
      root.left = this._insertRec(root.left, data);
    } else if (data > root.data) {
      root.right = this._insertRec(root.right, data);
    }
    // duplicate values ignore
    return root;
  }

  // Inorder Traversal (sorted output)
  inorder(node: Node | null = this.root): void {
    if (!node) return;
    this.inorder(node.left);
    process.stdout.write(node.data + " ");
    this.inorder(node.right);
  }

  // Preorder Traversal
  preorder(node: Node | null = this.root): void {
    if (!node) return;
    process.stdout.write(node.data + " ");
    this.preorder(node.left);
    this.preorder(node.right);
  }

  // Postorder Traversal
  postorder(node: Node | null = this.root): void {
    if (!node) return;
    this.postorder(node.left);
    this.postorder(node.right);
    process.stdout.write(node.data + " ");
  }

  // Search value
  search(data: number): boolean {
    return this._searchRec(this.root, data);
  }

  private _searchRec(root: Node | null, data: number): boolean {
    if (!root) return false;
    if (root.data === data) return true;
    return data < root.data
      ? this._searchRec(root.left, data)
      : this._searchRec(root.right, data);
  }

  delete(value: number): void {
    this.root = this._deleteRec(this.root, value);
  }

  private _deleteRec(node: Node | null, value: number): Node | null {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this._deleteRec(node.left, value);
    } else if (value > node.data) {
      node.right = this._deleteRec(node.right, value);
    } else {
      // Node found → handle cases
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Node with two children → find inorder successor (smallest in right subtree)
      let successor = this._minValueNode(node.right);
      node.data = successor.data;
      node.right = this._deleteRec(node.right, successor.data);
    }
    return node;
  }

  private _minValueNode(node: Node): Node {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

// Example usage
const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Inorder before deletion:", bst.inorder());

bst.delete(20); // Leaf node
bst.delete(30); // Node with one child
bst.delete(50); // Node with two children

console.log("Inorder after deletion:", bst.inorder());

console.log("\nSearch 60:", bst.search(60)); // Returns true
console.log("Search 25:", bst.search(25)); // Returns false
