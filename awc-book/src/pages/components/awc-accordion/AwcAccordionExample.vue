<template>
  <div class="example-wrapper">
    <h1>{{ title }} Examples</h1>
    <div class="example-section">
      <h2>awc-accordion Examples</h2>
      <!-- Add examples here -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'AwcAccordion';
</script>

<style scoped>
.example-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.example-section {
  width: 100%;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>