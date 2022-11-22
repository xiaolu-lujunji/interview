import el from "./el";

test("element", () => {
  const ul = el("ul", { id: "list" }, [
    el("li", { class: "item" }, ["Item 1"]),
    el("li", { class: "item" }, ["Item 2"]),
    el("li", { class: "item" }, ["Item 3"]),
  ]);

  const ulRoot = ul.render();
  document.body.appendChild(ulRoot);

  expect(document.body.innerHTML).toBe(
    '<ul id="list"><li class="item">Item 1</li><li class="item">Item 2</li><li class="item">Item 3</li></ul>'
  );
});
