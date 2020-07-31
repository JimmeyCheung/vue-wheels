<template>
  <div style="padding-top: 16px;">
    <h2>简单示例</h2>
    <p>
      <strong>预览</strong>
    </p>
    <j-slides :selected.sync="selected">
      <j-slides-item name="1">
        <div class="box">1</div>
      </j-slides-item>
      <j-slides-item name="2">
        <div class="box">2</div>
      </j-slides-item>
      <j-slides-item name="3">
        <div class="box">3</div>
      </j-slides-item>
    </j-slides>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import JSlides from "../../../src/slides/slides";
import JSlidesItem from "../../../src/slides/slides-item";
export default {
  components: {
    JSlides,
    JSlidesItem,
  },
  data() {
    return {
      selected: "1",
      content: `
        <j-slides :selected.sync="selected">
            <j-slides-item name="1">
                <div class="box">1</div>
            </j-slides-item>
            <j-slides-item name="2">
                <div class="box">2</div>
            </j-slides-item>
            <j-slides-item name="3">
                <div class="box">3</div>
            </j-slides-item>
        </j-slides>
        data: {
            selected: '1'
        }
        <style lang="scss" scoped>
            .box{
                height: 300px;
                color: white;
                background-color: $skin-color;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            } 
        </style>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
<style lang="scss" scoped>
@import "var";
.box {
  height: 300px;
  background-color: $skin-color;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
