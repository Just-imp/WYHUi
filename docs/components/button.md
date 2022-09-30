# 点不坏的按钮
## 基础用法

按钮的用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <div style="margin-top:20px;">
    <Wbutton>测试按钮</Wbutton>
    <Wbutton
      color="blue"
      :plain="true"
      >朴素蓝色按钮</Wbutton
    >
    <Wbutton
      color="gray"
      :round="true"
      >灰色大圆角按钮</Wbutton
    >
    <Wbutton color="yellow">黄色按钮</Wbutton>
    <Wbutton
      color="red"
      icon="share"
      :disabled="dis"
      >红色按钮</Wbutton
    >
  </div>
</template>
```

