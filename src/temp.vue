<template>
   <div>
      <Wbutton>测试按钮</Wbutton>
      <Wbutton color="blue">蓝色按钮</Wbutton>
      <Wbutton color="gray">灰色按钮</Wbutton>
      <Wbutton color="yellow">黄色按钮</Wbutton>
      <Wbutton color="red">红色按钮</Wbutton>
      <Wbutton>测试按钮</Wbutton>
   </div>

</template>

<script setup lang="ts">
//此文件用于测试组件库内容
import Wbutton from "./button/index";
</script>
<style  scoped>
div>button{
   margin-left: 20px;
}
</style>