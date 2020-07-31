<template>
  <div style="padding-top: 16px;">
    <h2>使用方法</h2>
    <p>
      <strong>引入Vue.prototype.$toast</strong>
    </p>
    <pre><code>{{content1}}</code></pre>

    <h2>简单示例</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <j-button @click="$toast('点击弹出提示')">上方弹出</j-button>
      <j-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</j-button>
      <j-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</j-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from "../../../src/plugin";
import JButton from "../../../src/button/button";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: { JButton },
  data() {
    return {
      content1: `
        import { Pager } from "jimmey-wheel";
        Vue.use(Pager);
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      content2: `
        <style>
            .gulu-toast {
                z-index: 30;
            }
        </style>
        <j-button @click="$toast('点击弹出提示')">上方弹出</j-button>
        <j-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</j-button>
        <j-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</j-button>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script> 