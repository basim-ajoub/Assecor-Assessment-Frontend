<template>
  <AppHeader />
  <router-view/>
  <AppFooter />
</template>
<script>
import AppHeader from '@/components/header/AppHeader.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  watch: {
    
  }
}
</script>
