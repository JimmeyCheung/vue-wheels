<template>
  <div style="padding-top: 16px;">
    <h2>简单示例</h2>
    <p>
      <strong>预览</strong>
    </p>
    <j-input value="默认"></j-input>
    <j-input value="禁用" disabled></j-input>
    <j-input value="只读" readonly></j-input>

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
      selected: "1",
      content: `
        <j-input></j-input>
        <j-input value="默认"></j-input>
        <j-input value="禁用" disabled></j-input>
        <j-input value="只读" readonly></j-input>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
