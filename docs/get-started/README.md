---
title: 快速上手
---

# 快速上手

## 安装

请参考 [安装](../install/) 章节

## 全局导入组件和样式

```javascript
import { Button } from "jimmey-wheel";
import Vue from "vue";
import "jimmey-wheel/dist/wheel.css";

new Vue({
  el: "#app",
  components: {
    "j-button": Button,
  },
});
```
