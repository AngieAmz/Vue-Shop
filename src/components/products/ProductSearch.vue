<script setup>
import { ref, watch } from 'vue'

const searchQuery = ref('')

const emit = defineEmits(['update-search'])

watch(searchQuery, (newValue) => {
  emit('update-search', newValue)
})
</script>

<template>
    <div class="search-container">
      <v-text-field
        class="icon"
        label="Search Product"
        v-model="searchQuery"
        append-inner-icon="fa fa-search"
      ></v-text-field>
    </div>
  </template>
  

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  max-width: 500px;
  margin: auto;
}

.icon {
  color: rgba(0, 128, 0, 0.763);
}
</style>
