<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  features: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="product-card">
    <div class="card-image">
      <img :src="image" :alt="title">
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
      <ul class="card-features" v-if="features.length">
        <li v-for="(feature, index) in features" :key="index">
          <span class="check-icon">✓</span> {{ feature }}
        </li>
      </ul>
      <a href="#" class="card-link">了解详情 &rarr;</a>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.card-image {
  height: 250px;
  overflow: hidden;
  background-color: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.card-image img {
  max-height: 100%;
  width: auto;
  transition: transform 0.5s ease;
}

.product-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.card-desc {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.card-features {
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.card-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.check-icon {
  color: var(--color-primary);
  margin-right: 0.5rem;
  font-weight: bold;
}

.card-link {
  color: var(--color-secondary);
  font-weight: 600;
  margin-top: auto;
  display: inline-block;
}

.card-link:hover {
  color: var(--color-primary);
}
</style>
