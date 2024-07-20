<script setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import ProductCard from '../components/products/ProductCard.vue'
import ProductSearch from '../components/products/ProductSearch.vue'
import ProductDialog from '@/components/products/ProductDialog.vue'
import TitleComponent from '@/components/TitleComponent.vue';

const loading = ref(false)
const products = ref([])
const filteredProducts = ref([])
const searchQuery = ref('')
const productDialog = ref(null)

const showDialog = (item) => {
  productDialog.value.openDialog(item)
}

const getProducts = async () => {
  try {
    loading.value = true
    const res = await axios.get('https://fakestoreapi.com/products')
    products.value = res.data
    filteredProducts.value = res.data
  } catch (error) {
    console.error('unable to get products: ', error)
  } finally {
    loading.value = false
  }
}

const filterProducts = () => {
  if (searchQuery.value) {
    filteredProducts.value = products.value.filter(product =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  } else {
    filteredProducts.value = products.value
  }
}

watch(searchQuery, filterProducts)

const updateSearch = (value) => {
  searchQuery.value = value
}

getProducts()
</script>

<template>
  <div class="about">
    <TitleComponent title="OUR PRODUCTS"/>
    <ProductSearch @update-search="updateSearch" />
    <ProductCard :products="filteredProducts" @open-dialog="showDialog" />
    <ProductDialog ref="productDialog" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
