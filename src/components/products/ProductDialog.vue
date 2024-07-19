<template>
  <v-dialog
    :model-value="isDialogOpen"
    @update:model-value="updateDialogVisibility"
    max-width="500"
  >
    <template>
      <v-card>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-text>
          <v-img :src="product.image" height="200px" fit></v-img>
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
          <!-- <p>Rating: {{ product.rating.rate }}/5 ({{ product.rating.count }} reviews)</p> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" @click="closeDialog"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isDialogOpen: {
    type: Boolean,
    required: true
  }
})

console.log(product.value)

const product = ref(props.product)

const emits = defineEmits(['update:isDialogOpen'])

const closeDialog = () => {
  emits('update:isDialogOpen', false)
}

const updateDialogVisibility = (value) => {
  emits('update:isDialogOpen', value)
}
</script>
