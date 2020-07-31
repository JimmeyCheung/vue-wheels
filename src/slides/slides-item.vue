<template>
  <div>
    <template v-if="animationEnabled">
      <transition name="slide">
        <div class="g-slides-item" v-if="visible" :class="{reverse}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="g-slides-item" v-if="visible" :class="{reverse}">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "GuluSlidesItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
      reverse: false,
      animationEnabled: false,
    };
  },
  updated() {
    this.animationEnabled = true;
  },
  computed: {
    visible() {
      return this.selected === this.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active {
  transition: all 0.3s;
}
.slide-leave-active {
  transition: all 0.6s;
}
.slide-enter,
.slide-enter.reverse {
  transform: translateX(100%);
}
.slide-leave-to,
.slide-leave-to.reverse {
  transform: translateX(-100%);
}
</style>