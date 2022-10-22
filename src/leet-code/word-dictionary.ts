/**
 * @description 211. 添加与搜索单词 - 数据结构设计
 * @see https://leetcode.cn/problems/design-add-and-search-words-data-structure/
 * @tag 前缀树
 */

interface PrefixTreeNode {
  start: number;
  end: number;
  children: PrefixTreeNode[];
}

class WordDictionary {
  private root: PrefixTreeNode;

  constructor() {
    this.root = {
      start: 0,
      end: 0,
      children: [],
    };
  }

  addWord(word: string): void {
    let root = this.root;
    root.start++;

    for (let i = 0; i < word.length; ++i) {
      const letterIndex = word.charCodeAt(i) - "a".charCodeAt(0);
      let child = root.children[letterIndex];
      if (!child) {
        child = {
          start: 0,
          end: 0,
          children: [],
        };
        root.children[letterIndex] = child;
      }
      child.start++;
      root = child;
    }

    root.end++;
  }

  search(word: string): boolean {
    const find = (root: PrefixTreeNode, word: string): boolean => {
      let currentRoot = root;
      for (let i = 0; i < word.length; ++i) {
        if (word[i] === ".") {
          return currentRoot.children.some(
            (child) => child && find(child, word.slice(i + 1))
          );
        } else {
          const letterIndex = word.charCodeAt(i) - "a".charCodeAt(0);
          const child = currentRoot.children[letterIndex];
          if (!child || child.start === 0) return false;
          currentRoot = child;
        }
      }

      return currentRoot.end !== 0;
    };

    return find(this.root, word);
  }
}
