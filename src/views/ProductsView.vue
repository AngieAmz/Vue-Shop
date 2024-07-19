<script setup>
import axios from 'axios'
import { ref } from 'vue'
import ProductCard from '../components/products/ProductCard.vue'
// import ProductSearch from '../components/products/ProductSearch.vue'
import ProductDialog from '@/components/products/ProductDialog.vue'

const loading = ref(false)
const products = ref([])
const selectedProduct = ref({})
const isDialogOpen = ref(false)

const handleOpenDialog = (product) => {
  selectedProduct.value = product
  isDialogOpen.value = true
}

const getProducts = async () => {
  try {
    loading.value = true
    const res = await axios.get('https://fakestoreapi.com/products')
    products.value = res.data
  } catch (error) {
    console.error('uneabled to get products: ', error)
  } finally {
    loading.value = false
  }
}

getProducts()
</script>

<template>
  <div class="about">
    <!-- <ProductSearch /> -->
    <ProductCard :products="products" @open-dialog="handleOpenDialog" />
    <ProductDialog
      :product="selectedProduct"
      :isDialogOpen="isDialogOpen"
      @update:isDialogOpen="isDialogOpen = $event"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
</style>
