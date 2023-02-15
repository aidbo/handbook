---
layout: doc
---

# Visual Studio Code

## 调试 - `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node", // debug的类型(node or chrome)
      "request": "launch", // 请求配置类型(launch or attach)
      "name": "Launch Program", // 调试配置的 name
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

## 配置文件

