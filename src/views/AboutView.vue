<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import TechTimeline from '../components/TechTimeline.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-subtitle">专注微生物肥料菌剂研发，科技兴农</p>
      </div>
    </div>
    
    <div class="container section">
      <div class="about-intro">
        <div class="intro-text">
          <SectionTitle title="公司简介" align="left" />
          <p>
            益生源生物科技有限公司成立于2024年，坐落于科教名城北京。
            公司依托强大的科研实力，专注于农业微生物菌剂的研发、生产和销售。
          </p>
          <p>
            我们深知土壤健康是农业可持续发展的基石。因此，我们致力于开发能够改善土壤微生态、
            促进作物根系生长、提高肥料利用率的高效微生物产品。
          </p>
        </div>
        <div class="intro-image">
           <img src="@/assets/images/about-bg.png" alt="Company Environment">
        </div>
      </div>
    </div>
    
    <div class="section bg-surface">
      <div class="container">
        <SectionTitle 
          title="核心技术" 
          subtitle="凝集素双重筛选技术 - 我们的核心竞争力"
        />
        <TechTimeline />
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<style scoped>
.page-header {
  background-color: var(--color-primary);
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.section {
  padding: 4rem 0;
}

.bg-surface {
  background-color: var(--color-surface);
}

.about-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.intro-image img {
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .about-intro {
    grid-template-columns: 1fr;
  }
}
</style>
