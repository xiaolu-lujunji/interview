# useEffect vs useLayoutEffect

#### 区别

调用时机不同

- useEffect ：浏览器完成布局与绘制之后，在一个延迟事件中被调用
- useLayoutEffect ：所有的 DOM 变更之后同步调用

这张图将有助于更好地理解。
![](https://d33wubrfki0l68.cloudfront.net/b6ca7c50edc659d615733d2aa21b3f10ab00529a/fdbaa/images/hooks/react_hook-flow.png)

#### 应用场景

我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。

## 参考

- [Understanding the difference between React useEffect and useLayoutEffect hooks](https://blog.saeloun.com/2022/07/28/difference-between-useeffect-and-useeffectlayout-hooks)
- [useEffect](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)
