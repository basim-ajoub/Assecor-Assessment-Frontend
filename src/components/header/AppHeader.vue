<template>
    <header class="header" ref="header">
      <div class="header__box container">
        <div class="header__logo">
          <picture class="header__logo-picture">
              <source media="(min-width: 48rem)" srcset="@/assets/img/icons-star-wars-100.webp">
              <img src="@/assets/img/icons-star-wars.webp" loading="lazy"  alt="star wars icon">
            </picture>
        </div>
        <div class="header__mobile-btn">
          <button data-collapse-toggle="mobile-menu-2" @click="menuTrigger" type="button" class="menu-button" aria-controls="mobile-menu-2" aria-expanded="false">
                    <svg class="menu-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="close-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <nav ref="header__nav" class="header__nav">
          <router-link @click="handelLink"  class="header__nav-link" to="/">Star Wars</router-link>
          <router-link @click="handelLink" class="header__nav-link" to="/filme">Filme</router-link>
          <router-link @click="handelLink" class="header__nav-link" to="/charaktere">Charaktere</router-link>
          <router-link @click="handelLink" class="header__nav-link" to="/planeten">Planeten</router-link>
        </nav>
        <div class="header__search">
          <SearchField />
        </div>
      </div>
    </header>
</template>
  
  <script>
  import SearchField from '@/components/searchField/SearchField.vue'
  import '@/assets/css/style.scss'
  export default {
    name: 'AppHeader',
    data() {
      return {
        showMobileMenu: false,
      };
    },
    components: {
    SearchField
  },
  methods: {
    handelLink() {
    const test = this.$refs.header.classList.contains('active');
    this.menuTrigger();
    },
    menuTrigger() {
        this.showMobileMenu = !this.showMobileMenu;
        this.$refs.header.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    },
  }
  }
  </script>