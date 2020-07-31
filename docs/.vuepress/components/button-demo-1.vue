<template>
  <div style="padding-top: 16px;">
    <h2>简单示例</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="button-group">
      <j-button>默认按钮</j-button>
      <j-button icon="setting">设置按钮</j-button>
      <j-button :loading="true">加载按钮</j-button>
      <j-button disabled>禁用按钮</j-button>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import JButton from "../../../src/button/button";
export default {
  components: {
    "j-button": JButton,
  },
  data() {
    return {
      content: `
        <j-button>默认按钮</j-button>
        <j-button icon="setting">设置按钮</j-button>
        <j-button :loading="true">加载按钮</j-button>
        <j-button disabled>禁用按钮</j-button>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
<style lang="scss" scoped>
.button-group {
  display: flex;
  align-items: center;
}
</style>
