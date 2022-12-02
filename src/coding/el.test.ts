// const element = el("ul", { id: "father" }, [
//   el("li", { class: "first" }, ["item1"]),
//   el("li", { class: "second" }, ["item2"]),
//   el("li", { class: "third" }, ["item3"]),
// ]);
// document.body.appendChild(element.render());

class TextNode {
  private text: string;

  public constructor(text: string) {
    this.text = text;
  }

  public render() {
    return document.createTextNode(this.text);
  }
}

class ElementNode {
  private type: string;
  private props: Record<"class" | "id", any>;
  private children: (ElementNode | TextNode)[];

  public constructor(
    type: string,
    props: Record<"class" | "id", any>,
    children: (ElementNode | TextNode)[]
  ) {
    this.type = type;
    this.props = props;
    this.children = children;
  }

  public render() {
    const domNode = document.createElement(this.type);

    Object.keys(this.props).forEach((prop) => {
      if (prop === "class") {
        domNode.className = this.props.class;
      } else {
        domNode[prop as "id"] = this.props[prop as "id"];
      }
    });

    this.children.forEach((child) => {
      domNode.appendChild(child.render());
    });

    return domNode;
  }
}

function el(
  type: string,
  props: Record<string, any>,
  children: (ElementNode | string)[]
) {
  return new ElementNode(
    type,
    props,
    children.map((child) =>
      typeof child === "string" ? new TextNode(child) : child
    )
  );
}

describe("el", () => {
  test("测试用例 1", () => {
    const element = el("ul", { id: "father" }, [
      el("li", { class: "first" }, ["item1"]),
      el("li", { class: "second" }, ["item2"]),
      el("li", { class: "third" }, ["item3"]),
    ]);

    document.body.appendChild(element.render());

    expect(document.body.innerHTML).toBe(
      '<ul id="father"><li class="first">item1</li><li class="second">item2</li><li class="third">item3</li></ul>'
    );
  });
});
