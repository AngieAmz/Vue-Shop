<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="title">
      <h3 style="font-weight: bold">{{props.title}}</h3>
      <v-divider length="50" :thickness="3" class="divider border-opacity-100" />
    </div>
</template>

<style scoped>
.title {
  margin-bottom: 40px;
  padding-top: 30px;
  text-align: center;
  display: grid;
  place-content: center;
}

.divider {
  margin-left: 40px;
}
</style>