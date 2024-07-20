<script setup>
import axios from 'axios'
import { ref } from 'vue'
import ProductCard from '../products/ProductCard.vue'
import ProductDialog from '@/components/products/ProductDialog.vue'
import TitleComponent from '../TitleComponent.vue'

const loading = ref(false)
const products = ref([])
const productDialog = ref(null)

const showDialog = (item) => {
  productDialog.value.openDialog(item)
}

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
    <TitleComponent title="BEST-SELLERS" />
    <ProductCard :products="products" @open-dialog="showDialog" />
    <ProductDialog ref="productDialog" />
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
