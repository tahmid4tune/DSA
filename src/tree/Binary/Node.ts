/**
 * The NODE class that represents a NODE in the Binary Tree
 */

export class Node {
  data: number;
  left: Node | null;
  right: Node | null;

  constructor(item: number) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}
