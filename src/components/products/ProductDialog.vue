<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const product = ref({})

function openDialog(item) {
  dialog.value = true
  product.value = item
}

function closeDialog() {
  dialog.value = false
}

defineExpose({ openDialog })
</script>

<template>
  <v-dialog v-model="dialog" max-width="800px">
    <v-card>
      <v-card-actions>
        <v-spacer> <v-card-title class="headline"> Product Details </v-card-title></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog">
          <font-awesome-icon icon="fa-solid fa-x" /></v-btn>
      </v-card-actions>
      <v-img height="200px" :src="product.image" fit></v-img>
      <v-card-text class="price"><span>$</span>{{ product.price }}</v-card-text>
      <v-card-text class="title-container">
        <v-card-text class="title">
          {{ product.title }}
        </v-card-text>
        <v-card-text style="padding: 0;">
          <font-awesome-icon icon="fa-solid fa-star" style="color: orange" />
          {{ product.rating.rate }} ({{ product.rating.count }}+)
        </v-card-text>
      </v-card-text>

      <v-card-text style="padding: 5px 20px 15px; text-align: justify;">{{ product.description }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  padding: 0 10px;
}

.title-container {
  display: flex;
  justify-content: space-between;
  padding: 5px 8px !important;
}

.price {
  color: red;
  font-size: 14px;
  font-weight: bold;
  padding: 2px 20px !important;
}

.price span {
  font-size: 11px;
  font-weight: bold;
}
</style>
