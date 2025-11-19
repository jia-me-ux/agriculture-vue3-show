<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">益生源</h3>
          <p class="footer-desc">
            专注于微生物肥料菌剂研发，致力于农业科技创新，推动绿色农业可持续发展。
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">快速链接</h4>
          <ul class="footer-links">
            <li><RouterLink to="/">首页</RouterLink></li>
            <li><RouterLink to="/about">关于我们</RouterLink></li>
            <li><RouterLink to="/products">产品中心</RouterLink></li>
            <li><RouterLink to="/contact">联系我们</RouterLink></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">联系方式</h4>
          <ul class="contact-info">
            <li>📍北京市海淀区故宫一号豪华别墅区</li>
            <li>📧 11451453284@qq.com</li>
            <li>📞 +1 114 514 6580</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 益生源生物科技有限公司 版权所有</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.footer-desc {
  color: #aaa;
  line-height: 1.6;
}

.footer-subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: white;
}

.footer-links li,
.contact-info li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #aaa;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--color-primary);
}

.contact-info li {
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 1.5rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}
</style>
