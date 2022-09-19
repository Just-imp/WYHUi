<template>
   <div>
      <Wbutton>测试按钮</Wbutton>
      <Wbutton color="blue" :plain="true">朴素蓝色按钮</Wbutton>
      <Wbutton color="gray" :round="true">灰色大圆角按钮</Wbutton>
      <Wbutton color="yellow">黄色按钮</Wbutton>
      <Wbutton color="red" icon="share" :disabled="dis">红色按钮</Wbutton>
      <Wbutton icon="add-circle" round plain :disabled="true"></Wbutton>
   </div>

</template>

<script setup lang="ts">
//此文件用于测试组件库内容
import Wbutton from "./button/index";
import { ref } from "vue";
let dis = ref(true)
setTimeout(() => {
   dis.value = false
}, 3000);
</script>
<style  scoped>
div>button {
   margin-left: 20px;
}
</style>