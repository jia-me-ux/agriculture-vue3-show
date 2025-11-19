<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  alert('感谢您的留言！我们会尽快联系您。')
  formData.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">联系我们</h1>
        <p class="page-subtitle">期待与您的合作，共创绿色农业</p>
      </div>
    </div>
    
    <div class="container section">
      <div class="contact-grid">
        <div class="contact-info">
          <SectionTitle title="联系方式" align="left" />
          <div class="info-item">
            <div class="icon">📍</div>
            <div class="details">
              <h3>公司地址</h3>
              <p>北京市海淀区故宫一号豪华别墅区</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">📧</div>
            <div class="details">
              <h3>电子邮箱</h3>
              <p>1115433100@qq.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">📞</div>
            <div class="details">
              <h3>联系电话</h3>
              <p>+1 800 559 6580</p>
            </div>
          </div>
          
          <div class="map-placeholder">
            <p>地图加载中...</p>
            <!-- In a real app, embed Baidu/Tencent Map here -->
          </div>
        </div>
        
        <div class="contact-form-wrapper">
          <h3 class="form-title">发送留言</h3>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" id="name" v-model="formData.name" required>
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div class="form-group">
              <label for="phone">电话</label>
              <input type="tel" id="phone" v-model="formData.phone">
            </div>
            <div class="form-group">
              <label for="message">留言内容</label>
              <textarea id="message" rows="5" v-model="formData.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">提交留言</button>
          </form>
        </div>
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.icon {
  font-size: 2rem;
  background-color: var(--color-surface);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-primary);
}

.details h3 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: var(--color-text);
}

.details p {
  color: #666;
}

.map-placeholder {
  background-color: #e0e0e0;
  height: 250px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  margin-top: 2rem;
}

.contact-form-wrapper {
  background-color: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.form-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.btn-block {
  width: 100%;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-form-wrapper {
    padding: 2rem;
  }
}
</style>
