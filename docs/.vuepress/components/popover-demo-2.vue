<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

    <j-popover trigger="hover">
      <j-button>上方弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>
    <j-popover position="bottom" trigger="hover">
      <j-button>下方弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>
    <j-popover position="left" trigger="hover">
      <j-button>左边弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>
    <j-popover position="right" trigger="hover">
      <j-button>右边弹出</j-button>
      <template slot="content">弹出内容</template>
    </j-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import JButton from "../../../src/button/button";
import JPopover from "../../../src/popover";
export default {
  components: { JButton, JPopover },
  data() {
    return {
      content: `
        <j-popover trigger="hover">
            <j-button>上方弹出</j-button>
            <template slot="content">
              弹出内容
            </template>
        </j-popover>
        <j-popover position="bottom" trigger="hover">
            <j-button>下方弹出</j-button>
            <template slot="content">
              弹出内容
            </template>
        </j-popover>
        <j-popover position="left" trigger="hover">
            <j-button>左边弹出</j-button>
            <template slot="content">
              弹出内容
            </template>
        </j-popover>
        <j-popover position="right" trigger="hover">
            <j-button>右边弹出</j-button>
            <template slot="content">
              弹出内容
            </template>
        </j-popover>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
  methods: {
    onClickButton() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true,
      });
    },
  },
};
</script> 