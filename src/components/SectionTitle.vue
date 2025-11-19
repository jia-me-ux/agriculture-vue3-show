<script setup>
defineProps({
  title: String,
  subtitle: String,
  align: {
    type: String,
    default: 'center'
  }
})
</script>

<template>
  <div :class="['section-header', align]">
    <h2 class="section-title">{{ title }}</h2>
    <div class="divider"></div>
    <p class="section-subtitle" v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-header {
  margin-bottom: 4rem;
}

.section-header.center {
  text-align: center;
}

.section-header.center .divider {
  margin: 1rem auto;
}

.section-title {
  font-size: 2.5rem;
  color: var(--color-text);
  position: relative;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: var(--color-primary);
  border-radius: 2px;
  margin: 1rem 0;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
