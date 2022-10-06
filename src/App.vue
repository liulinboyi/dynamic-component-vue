<script setup>
import { ref } from 'vue'
import MyIcon from "./my-icon.vue";
const name = ref("Icon2");
</script>

<template>
  <button @click="name === 'Icon2' ? (name = 'Icon1') : (name = 'Icon2')">
    change name
  </button>
  <MyIcon :iconComponentName="name" />
</template>
