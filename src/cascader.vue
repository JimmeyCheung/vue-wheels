<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item,index) in source" :key="index">
        <cascader-item :sourceItem="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./cascader-item";
export default {
  name: "GuluCascader",
  components: { CascaderItem },
  props: {
    source: {
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
@import "var";
.cascader {
}
</style> 