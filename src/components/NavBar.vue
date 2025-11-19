<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="container navbar-content">
      <RouterLink to="/" class="logo">
        <span class="logo-cn">益生源</span>
        <span class="logo-en">YI SHEN YUAN</span>
      </RouterLink>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle navigation">
        <span class="hamburger"></span>
      </button>

      <div :class="['nav-links', { 'active': isMenuOpen }]">
        <RouterLink to="/" @click="isMenuOpen = false">首页</RouterLink>
        <RouterLink to="/about" @click="isMenuOpen = false">关于我们</RouterLink>
        <a href="#" @click="isMenuOpen = false">新闻资讯</a>
        <RouterLink to="/products" @click="isMenuOpen = false">产品中心</RouterLink>
        <a href="#" @click="isMenuOpen = false">交流中心</a>
        <RouterLink to="/contact" @click="isMenuOpen = false">联系我们</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1.5rem 0;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  backdrop-filter: blur(10px);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  color: white;
}

.navbar.scrolled .logo {
  color: var(--color-primary);
}

.logo-cn {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-heading);
}

.logo-en {
  font-size: 0.6rem;
  letter-spacing: 2px;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  font-weight: 500;
  position: relative;
}

.navbar.scrolled .nav-links a {
  color: var(--color-text);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: background-color 0.3s;
}

.navbar.scrolled .hamburger {
  background-color: var(--color-text);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: inherit;
  left: 0;
  transition: transform 0.3s;
}

.hamburger::before { top: -8px; }
.hamburger::after { bottom: -8px; }

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    z-index: 1001;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    padding: 6rem 2rem;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    color: var(--color-text);
    font-size: 1.2rem;
  }
  
  .logo {
    color: var(--color-primary); /* Always visible on mobile if bg is white, but here bg is transparent initially. */
    /* Actually on mobile, if not scrolled, text is white. If menu opens, it covers. */
  }
  
  /* Fix mobile logo color when not scrolled but background might be light image? 
     Design says "Wheat background". White text is fine. 
     But if menu is open, we need to ensure contrast if it overlaps? 
     The menu is a sidebar. */
}
</style>
