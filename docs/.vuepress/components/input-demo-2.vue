<template>
  <div style="padding-top: 16px;">
    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <j-input v-model="value"></j-input>
    <div>value: {{ value }}</div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import JInput from "../../../src/input";
export default {
  components: { JInput },
  data() {
    return {
      value: "输入框内容",
      content: `
        data:{
            value: '输入框内容'
        }
        <j-input v-model="value"></j-input>
        <div>
            value: {{value}}
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
