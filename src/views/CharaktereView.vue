<template>
  <div class="container charaktere-page">
    <h1 class="page__title flex-center">Charaktere</h1>
    <CardList :catCharaktere="true" listType="ItemCharakterDetails" />
  </div>
</template>
<script>
// @ is an alias to /src
import CardList from '../components/cardList/CardList.vue'
export default {
  name: 'CharaktereView',
  components: {
    CardList
  }
}
</script>