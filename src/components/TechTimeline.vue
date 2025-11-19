<script setup>
const steps = [
  {
    year: 'Step 1',
    title: '样本采集',
    description: '从全国各地优质土壤中采集数千份微生物样本。'
  },
  {
    year: 'Step 2',
    title: '初级筛选',
    description: '利用传统培养基筛选出具有促生潜力的菌株。'
  },
  {
    year: 'Step 3',
    title: '凝集素筛选',
    description: '核心技术：利用植物凝集素特异性结合原理，筛选出高亲和性菌株。'
  },
  {
    year: 'Step 4',
    title: '田间试验',
    description: '在不同作物和环境下进行严格的田间效果验证。'
  },
  {
    year: 'Step 5',
    title: '产品化',
    description: '优化发酵工艺，制成高活性、高稳定性的液体菌剂。'
  }
]
</script>

<template>
  <div class="timeline">
    <div class="timeline-item" v-for="(step, index) in steps" :key="index">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <span class="timeline-year">{{ step.year }}</span>
        <h3 class="timeline-title">{{ step.title }}</h3>
        <p class="timeline-desc">{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: var(--color-primary);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  padding: 0 2rem;
}

.timeline-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.timeline-item:nth-child(even) {
  left: 50%;
  text-align: left;
}

.timeline-marker {
  position: absolute;
  top: 0;
  width: 16px;
  height: 16px;
  background-color: white;
  border: 4px solid var(--color-primary);
  border-radius: 50%;
  z-index: 1;
}

.timeline-item:nth-child(odd) .timeline-marker {
  right: -8px;
}

.timeline-item:nth-child(even) .timeline-marker {
  left: -8px;
}

.timeline-year {
  display: inline-block;
  background-color: var(--color-secondary);
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.timeline-title {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.timeline-desc {
  color: #666;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 50px;
    padding-right: 0;
    text-align: left !important;
  }
  
  .timeline-item:nth-child(even) {
    left: 0;
  }
  
  .timeline-item:nth-child(odd) .timeline-marker,
  .timeline-item:nth-child(even) .timeline-marker {
    left: 12px;
    right: auto;
  }
}
</style>
