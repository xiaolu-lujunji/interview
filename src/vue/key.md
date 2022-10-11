# v-for 的 key 用来做什么？

通过 key 管理状态

默认情况下，对于通过 `v-for` 渲染的元素列表，当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素。

就地更新意味着子组件状态或者临时 DOM 状态（例如表单输入值）就会丢失。

## 参考

- [通过 key 管理状态](https://cn.vuejs.org/guide/essentials/list.html#maintaining-state-with-key)
