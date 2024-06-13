<template>
  <div class="container filme-page">
    <h1 class="page__title flex-center">Filme</h1>
    <CardList :catFilm="true" listType="ItemFilmeDetails" />
  </div>
</template>
<script>
// @ is an alias to /src
import CardList from '../components/cardList/CardList.vue'
export default {
  name: 'FilmeView',
  components: {
    CardList
  },
}
</script>