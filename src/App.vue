<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from '/src/views/FooterView.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <FooterView />
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
  background-color: var(--color-background);
  max-height: 100vh;
}

.logo {
  margin: 0 2rem;
  width: 50px;
}

nav {
  place-items: left;
  font-size: 1rem;
  display: flex;
}

nav a.router-link-exact-active {
  color: var(--color-heading);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    padding: 0 2rem;
    margin: 0;
  }

  .logo {
    margin: 0 2rem 0 0;
    width: 50px;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    display: flex;
    margin-top: 1rem;
  }
}
</style>
