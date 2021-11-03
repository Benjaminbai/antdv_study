<template>
  <a-select-option :value="value">
    <slot></slot>
  </a-select-option>
</template>

<script>
import Vue from "vue";
import { Select } from "ant-design-vue";
import "ant-design-vue/lib/select/style/index.js";

Vue.use(Select);

export default {
  name: "BSelectOption",
  props: {
    value: {
      type: String,
      require: false,
      default: "",
    },
  },
};
</script>

<style lang="less">
</style>