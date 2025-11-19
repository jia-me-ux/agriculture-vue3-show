<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h2 class="subtitle fade-in-up">亲和性促生菌助力农业生产新发展</h2>
      <h1 class="title fade-in-up delay-1">走科技兴农之路<br>创绿色农业辉煌</h1>
      <div class="cta-group fade-in-up delay-2">
        <RouterLink to="/products" class="btn btn-primary">探索产品</RouterLink>
        <RouterLink to="/contact" class="btn btn-outline">联系我们</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-image: url('@/assets/images/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  display: flex;
  align-items: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
}

.subtitle {
  font-family: var(--font-body);
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.title {
  font-size: 4rem;
  margin-bottom: 3rem;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.cta-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-outline {
  border: 2px solid white;
  color: white;
  background: transparent;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: white;
  color: var(--color-primary);
}

/* Animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
}

.delay-1 { animation-delay: 0.3s; }
.delay-2 { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .hero {
    background-attachment: scroll; /* Disable parallax on mobile for performance */
  }
}
</style>
