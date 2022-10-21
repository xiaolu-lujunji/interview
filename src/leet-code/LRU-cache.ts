/**
 * @description 146. LRU 缓存
 * @see https://leetcode.cn/problems/lru-cache/
 * @tag LRU 缓存
 */

interface DoubleLinkedNode {
  key: number;
  value: number;
  prev: DoubleLinkedNode | null;
  next: DoubleLinkedNode | null;
}

export default class LRUCache {
  private map: Map<number, DoubleLinkedNode> = new Map();
  private head: DoubleLinkedNode = {
    key: -1,
    value: -1,
    prev: null,
    next: null,
  };
  private tail: DoubleLinkedNode = {
    key: -1,
    value: -1,
    prev: null,
    next: null,
  };
  private capacity: number = 0;

  constructor(capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;

      node.prev!.next = node.next;
      node.next!.prev = node.prev;

      node.prev = this.head;
      node.next = this.head.next;

      this.head.next = node;
      node.next!.prev = node;

      return node.value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    let node = null;
    if (this.map.has(key)) {
      node = this.map.get(key)!;
      node.value = value;

      node.prev!.next = node.next;
      node.next!.prev = node.prev;
    } else {
      node = { key, value, prev: null, next: null };
      this.map.set(key, node);
    }

    node.prev = this.head;
    node.next = this.head.next;

    this.head.next = node;
    node.next!.prev = node;

    if (this.map.size > this.capacity) {
      const node = this.tail.prev!;

      this.map.delete(node.key);

      node.prev!.next = node.next;
      node.next!.prev = node.prev;
    }
  }
}
