# 魔法注释

### 使用魔法注释的核心目的？性能优化

### 代码分割

```javascript
import(
  /* webpackChunkName: "my-chunk-name" */
  "./footer"
);
```

### 异步加载

```javascript
import(
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: lazy */
  "./someModule"
);
```

### 预加载

```javascript
import(
  /* webpackPrefetch: true */
  "./someModule"
);
```
