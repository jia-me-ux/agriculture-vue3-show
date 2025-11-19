<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'

const products = [
  {
    title: '强根王',
    description: '高效微生物菌剂，促进根系生长，提高作物抗逆性。适用于各种经济作物，如蔬菜、果树、花卉等。',
    image: '/src/assets/images/product-strong-root.png',
    features: ['转化土壤养分', '促进根系发育', '提高肥料利用率', '增强抗病能力']
  },
  {
    title: '护根王',
    description: '专为土壤健康设计，抑制有害病菌，保护作物根部。有效预防根腐病、枯萎病等土传病害。',
    image: '/src/assets/images/product-root-guard.png',
    features: ['抑制土传病害', '改善土壤结构', '增强植株免疫', '降解土壤毒素']
  },
  {
    title: '丰收宝 (即将推出)',
    description: '全营养型生物有机肥，提供作物生长所需多种微量元素。',
    image: '/src/assets/images/product-strong-root.png', // Placeholder
    features: ['全面营养', '改良土壤', '提升品质']
  }
]
</script>

<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">产品中心</h1>
        <p class="page-subtitle">科技创新，引领绿色农业未来</p>
      </div>
    </div>
    
    <div class="container section">
      <div class="products-grid">
        <ProductCard 
          v-for="(product, index) in products" 
          :key="index"
          v-bind="product"
        />
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
  min-height: 60vh;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
