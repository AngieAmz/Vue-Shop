<script setup>
import axios from 'axios'
import { ref } from 'vue'

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
    <v-row class="container">
      <v-col cols="12" md="4" v-for="(item, index) in products" :key="index">
        <v-card class="card">
          <v-img height="200px" :src="item.image" fit></v-img>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle> Rating: {{ item.rating.rate }} </v-card-subtitle>
          <v-card-text>Price: ${{ item.price }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.content {
  background-color: var(--color-background-mute);
}
.container {
  margin: auto;
  max-width: 1280px;
  display: flex;
  justify-content: center;
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

.card {
  padding-bottom: 12px;
}
.card:hover {
  background-color: var(--color-background-mute);
  cursor: pointer;
}
</style>
