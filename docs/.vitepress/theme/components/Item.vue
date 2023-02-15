<script lang="ts" setup>
</script>

<template>
  <div class="itemContainer">
    <slot></slot>
  </div>
</template>

<style scoped>
.itemContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem 0;
}
</style>
