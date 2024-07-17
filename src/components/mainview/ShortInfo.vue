<script setup></script>

<template>
  <div class="container">
    <div class="title">
      <h3>LET THE LIGHT IN</h3>
      <v-divider :thickness="3" class="divider border-opacity-100" />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet nihil veniam. In libero et
      maiores illum qui maxime vitae alias iure, quibusdam expedita laudantium sint magnam debitis
      odio quam.
    </p>
  </div>
</template>

<style scoped>
.container {
  margin: 4rem;
  display: grid;
  justify-content: center;
}

.title {
  display: grid;
  place-content: center;
}

h3 {
  font-size: 1.2rem;
}

.divider {
  color: #00bd7e;
  margin-bottom: 20px;
}

.container h1,
.container h3 {
  text-align: center;
}
</style>
