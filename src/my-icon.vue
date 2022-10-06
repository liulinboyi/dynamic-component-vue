<script setup>
import { computed } from "vue";
import icons from "./icon.js";
const props = defineProps({
  iconComponentName: {
    type: String,
    default: "Icon1",
  },
});

const components = icons;
const name = computed(() => {
  console.log(components, "components");
  const result = components[props.iconComponentName];
  console.log(result);
  return result;
});
</script>

<!-- <script>
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
</script> -->

<template>
  <component :is="name" />
</template>
