# v-model 实现原理

## 编译阶段

例如 `<template></template>` 中如下简单表达

`<input v-model="model" />`

会被编译成如下代码

```javascript
const _Vue = Vue;
return function render(_ctx, _cache) {
  with (_ctx) {
    const { openBlock: _openBlock, createElementBlock: _createElementBlock } =
      _Vue;
    return (
      _openBlock(),
      _createElementBlock(
        "input",
        {
          modelValue: model,
          "onUpdate:modelValue": ($event) => (model = $event),
        },
        null,
        8 /* PROPS */,
        ["modelValue", "onUpdate:modelValue"]
      )
    );
  }
};
```

在编译过程中，`v-model` 指令扩展为 `modelValue` 和 `onUpdate:modelValue` props
