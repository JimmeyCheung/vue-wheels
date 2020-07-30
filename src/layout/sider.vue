<template>
  <transition name="slide">
    <div class="sider" v-if="visible" @click="visible=false">
      <slot></slot>
      <div class="icon-wrap">
        <g-icon class="icon" name="shrink"></g-icon>
      </div>
    </div>
  </transition>
</template>
<script>
import icon from "../icon";
export default {
  name: "GuluSider",
  components: { "g-icon": icon },
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > .icon-wrap {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    > .icon {
      transition: all 0.5;
      cursor: pointer;

      &:hover {
        transform: scale(1.4);
      }
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style> 