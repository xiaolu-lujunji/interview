# Vue 2 和 Vue 3 之间的区别是什么？

借用官方文档的话

总的来说，Vue 3 提供了更小的包体积、更好的性能、更好的扩展性和更好的 TypeScript/IDE 支持。

更小的包体积

在 Vue 3 中，通过 `<script setup>` 形式书写的组件模板会被编译为一个内联函数，和 `<script setup>` 中的代码位于同一作用域。被编译的模板可以直接访问 `<script setup>` 中定义的变量，这对代码压缩更友好，因为本地变量名的名字可以被压缩。

在 Vue 2 中，选项式 API 需要依赖 `this` 上下文对象访问属性，但对象的属性名不能被压缩。

更好的性能

Vue 3 中的 diff 算法进行了优化重写。

更好的扩展性、更好的 TypeScript/IDE 支持

这两个特性极大程度上依靠 组合式 API。

## 参考

- [Vue 2 和 Vue 3 之间的区别是什么？](https://cn.vuejs.org/about/faq.html#what-s-the-difference-between-vue-2-and-vue-3)
