<template>
  <div style="padding-top: 16px;">
    <h2>左侧边栏布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <j-sider style=" background:black; width:200px; color: white;">sider</j-sider>
      <j-layout>
        <j-header style="height: 50px; background:#5adda2;">header</j-header>
        <j-content style="height: 100px; background:#41b883;">content</j-content>
        <j-footer style="height: 50px; background:#5adda2;">footer</j-footer>
      </j-layout>
    </j-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import JLayout from "../../../src/layout/layout";
import JHeader from "../../../src/layout/header";
import JFooter from "../../../src/layout/footer";
import JContent from "../../../src/layout/content";
import JSider from "../../../src/layout/sider";
export default {
  components: { JLayout, JHeader, JFooter, JContent, JSider },
  data() {
    return {
      content: `
        <j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <j-sider style=" background:black; width:200px; color: white;">
              sider
            </j-sider>
            <j-layout>
                <j-header style="height: 50px; background:#5adda2;">
                    header
                </j-header>
                <j-content style="height: 100px; background:#41b883;">
                    content
                </j-content>
                <j-footer style="height: 50px; background:#5adda2;">
                    footer
                </j-footer>
            </j-layout>
        </j-layout>
      `
        .replace(/^\ {8}/gm, "")
        .trim(),
    };
  },
};
</script> 