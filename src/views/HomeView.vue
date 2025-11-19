<script setup>
import HeroSection from '../components/HeroSection.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'

const products = [
  {
    title: '强根王',
    description: '高效微生物菌剂，促进根系生长，提高作物抗逆性。',
    image: '/src/assets/images/product-strong-root.png',
    features: ['转化土壤养分', '促进根系发育', '提高肥料利用率']
  },
  {
    title: '护根王',
    description: '专为土壤健康设计，抑制有害病菌，保护作物根部。',
    image: '/src/assets/images/product-root-guard.png',
    features: ['抑制土传病害', '改善土壤结构', '增强植株免疫']
  }
]
</script>

<template>
  <main>
    <HeroSection />
    
    <section class="section container">
      <SectionTitle 
        title="明星产品" 
        subtitle="科技赋能农业，菌剂助力增产"
      />
      
      <div class="products-grid">
        <ProductCard 
          v-for="(product, index) in products" 
          :key="index"
          v-bind="product"
        />
      </div>
      
      <div class="text-center" style="margin-top: 3rem;">
        <RouterLink to="/products" class="btn btn-primary">查看所有产品</RouterLink>
      </div>
    </section>
    
    <section class="section bg-surface">
      <div class="container">
        <div class="about-preview">
          <div class="about-text">
            <SectionTitle 
              title="关于乐地源" 
              align="left"
            />
            <p class="mb-4">
              合肥乐地源生物科技有限公司成立于2024年，是一家专注于微生物肥料菌剂研发的高新技术企业。
              我们致力于将现代生物技术与传统农业相结合，通过独创的"凝集素双重筛选技术"，
              培育出具有高亲和性和高活性的促生菌株。
            </p>
            <p class="mb-4">
              我们的使命是"走科技兴农之路，创绿色农业辉煌"，为现代农业提供安全、高效、环保的生物解决方案。
            </p>
            <RouterLink to="/about" class="btn btn-outline-primary">了解更多</RouterLink>
          </div>
          <div class="about-image">
            <img src="@/assets/images/about-bg.png" alt="About Le Di Yuan">
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </main>
</template>

<style scoped>
.section {
  padding: 6rem 0;
}

.bg-surface {
  background-color: var(--color-surface);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.about-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image img {
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.btn-outline-primary {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s;
}

.btn-outline-primary:hover {
  background-color: var(--color-primary);
  color: white;
}

@media (max-width: 768px) {
  .about-preview {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-image {
    order: -1;
  }
}
</style>
