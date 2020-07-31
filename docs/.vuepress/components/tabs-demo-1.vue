<template>
  <div style="padding-top: 16px;">
    <h2>简单示例</h2>
    <p>
      <strong>预览</strong>
    </p>
    <j-tabs :selected="selected">
      <j-tabs-head>
        <j-tabs-item name="1">1</j-tabs-item>
        <j-tabs-item name="2">2</j-tabs-item>
      </j-tabs-head>
      <j-tabs-body>
        <j-tabs-pane name="1">tabContent 1</j-tabs-pane>
        <j-tabs-pane name="2">tabContent 2</j-tabs-pane>
      </j-tabs-body>
    </j-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import JTabs from "../../../src/tabs/tabs";
import JTabsBody from "../../../src/tabs/tabs-body";
import JTabsHead from "../../../src/tabs/tabs-head";
import JTabsItem from "../../../src/tabs/tabs-item";
import JTabsPane from "../../../src/tabs/tabs-pane";
export default {
  components: { JTabs, JTabsBody, JTabsHead, JTabsItem, JTabsPane },
  data() {
    return {
      selected: "1",
      content: `
        data:{
            selected: '1'
        }
        <j-tabs :selected="selected">
            <j-tabs-head>
                <j-tabs-item name="1">1</j-tabs-item>
                <j-tabs-item name="2">2</j-tabs-item>
            </j-tabs-head>
            <j-tabs-body>
                <j-tabs-pane name="1">content 1</j-tabs-pane>
                <j-tabs-pane name="2">content 2</j-tabs-pane>
            </j-tabs-body>
        </j-tabs>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>