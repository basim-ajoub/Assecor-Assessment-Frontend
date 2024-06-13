<template>
  <div class="container planeten-page">
    <h1 class="page__title flex-center">Planeten</h1>
    <CardList :catPlanets="true" listType="ItemPlanetenDetails" />
  </div>
</template>
<script>
// @ is an alias to /src
import CardList from '../components/cardList/CardList.vue'
export default {
  name: 'PlanetenView',
  components: {
    CardList
  }
}
</script>