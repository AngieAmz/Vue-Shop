<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['open-dialog'])

const openDialog = (item) => {
  emits('open-dialog', item)
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
</script>

<template>
  <v-row class="container">
    <v-col cols="12" md="4" v-for="(item, index) in props.products" :key="index">
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
          {{ item.rating.rate }}/5 ({{ item.rating.count }})
        </v-card-subtitle>
        <v-card-text class="price">${{ item.price }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
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
</style>
