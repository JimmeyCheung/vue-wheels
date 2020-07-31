<template>
  <button class="g-button" @click="$emit('click')" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon v-if="!loading && icon" class="icon" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="g-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import icon from "../icon";
export default {
  name: "GuluButton",
  components: { "g-icon": icon },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "var"; // webpack 配置 scss 根目录
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $skin-color;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1em;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: darken($skin-color, 10%);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: $button-bg;
  }
  > .g-button-content {
    order: 2;
  }
  > .icon {
    width: 1em;
    height: 1em;
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .g-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
