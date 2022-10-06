<script>
import icons from "./icon.js";
export default {
  name: "my-icon",
  components: { ...icons },
  props: {
    iconComponentName: {
      type: String,
      default: "Icon1",
    },
  },
};
</script>

<template>
  <component :is="iconComponentName" />
</template>
