<template>
  <div class="home">
    <div class="image-container flex-center">
      <picture class="container">
        <source media="(min-width: 48rem)" srcset="@/assets/img/icon-star-wars-white-900.webp">
        <img src="@/assets/img/icon-star-wars-white-500.webp" loading="lazy"  alt="star wars icon">
      </picture> 

    </div> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
