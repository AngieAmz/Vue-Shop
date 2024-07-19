<script setup>
import axios from 'axios'
import { ref } from 'vue'
import ProductCard from '../products/ProductCard.vue'

const loading = ref(false)
const products = ref([])

const getProducts = async () => {
  try {
    loading.value = true
    const res = await axios.get('https://fakestoreapi.com/products')
    const product = res.data
    let count = 1
    product.forEach((element) => {
      const rating = element.rating
      if (rating.rate > 4 && count <= 6) {
        products.value.push(element)
        count++
      }
    })
  } catch (error) {
    console.error('uneabled to get products: ', error)
  } finally {
    loading.value = false
  }
}

getProducts()
</script>

<template>
  <div class="content">
    <div class="title">
      <h3 style="font-weight: bold">BEST-SELLERS</h3>
      <v-divider length="50" :thickness="3" class="divider border-opacity-100" />
    </div>
    <ProductCard :products="products" />
  </div>
</template>

<style scoped>
.content {
  background-color: var(--color-background-mute);
}

.title {
  margin-bottom: 50px;
  padding-top: 40px;
  text-align: center;
  display: grid;
  place-content: center;
}

.divider {
  margin-left: 40px;
}
</style>
