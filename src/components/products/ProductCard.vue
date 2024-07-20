<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['open-dialog'])

const openDialog = (item) => {
  emit('open-dialog', item)
}

const getStarIcon = (index, rating) => {
  if (index <= rating) {
    return 'fa-solid fa-star'
  } else if (index - rating < 1) {
    return 'fa-solid fa-star-half-alt'
  } else {
    return 'fa-regular fa-star'
  }
}

const currentPage = ref(1)
const itemsPerPage = 6

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return props.products.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(props.products.length / itemsPerPage)
})

const handlePageChange = (page) => {
  currentPage.value = page
}
</script>

<template>
  <div>
    <v-row class="container">
      <v-col cols="12" md="4" v-for="(item, index) in paginatedProducts" :key="index">
        <v-card class="card" @click="openDialog(item)">
          <v-img height="200px" :src="item.image" fit></v-img>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>
            <i>
              <font-awesome-icon
                v-for="star in 5"
                :key="star"
                :icon="getStarIcon(star, item.rating.rate)"
              />
            </i>
            {{ item.rating.rate }}/5
          </v-card-subtitle>
          <v-card-text class="price">${{ item.price }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      v-if="totalPages > 1"
      v-model="currentPage"
      :length="totalPages"
      @update:model-value="handlePageChange"
      class="pagination"
      :prev-icon="'fa fa-chevron-left'"
      :next-icon="'fa fa-chevron-right'"
    ></v-pagination>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1400px;
  display: flex;
  justify-content: center;
}
.card {
  padding: 12px 0;
}
.card:hover {
  background-color: var(--color-background-mute);
  cursor: pointer;
}
.card .price {
  color: red;
  font-size: 14px;
  font-weight: bold;
}

.card i {
  color: orange;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
