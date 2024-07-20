<template>
  <v-parallax height="80vh" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h3 font-weight-thin mb-4">Vue Shop</h1>
      <h4 class="subheading">The place where you can find everything you need!</h4>
      <br />
      <RouterLink to="/products">
        <v-btn class="btn text-none text-subtitle-1" color="#00bd7e">Let's go Shopping</v-btn>
      </RouterLink>
    </div>
  </v-parallax>
</template>
