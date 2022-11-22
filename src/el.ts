class El {
  private type: string;
  private props: Record<string, any>;
  private children: Node[];

  public constructor(
    type: string,
    props: Record<string, any>,
    children: Node[]
  ) {
    this.type = type;
    this.props = props;
    this.children = children;
  }

  public render() {
    const domNode = document.createElement(this.type);

    Object.keys(this.props).forEach((key) => {
      if (key === "class") {
        domNode.className = this.props[key];
      } else {
        domNode.setAttribute(key, this.props[key]);
      }
    });

    for (const child of this.children) {
      const childNode =
        typeof child === "string"
          ? document.createTextNode(child)
          : child.render();
      domNode.appendChild(childNode);
    }

    return domNode;
  }
}

type Node = El | string;

export default function el(
  type: string,
  props: Record<string, any>,
  children: Node[]
): El {
  return new El(type, props, children);
}
