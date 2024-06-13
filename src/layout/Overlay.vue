<template>
    <div>
      <button class="open-form" @click="toggleOverlay">{{ OverlayBtnTitle }}</button>
      <div v-if="showOverlay" class="overlay">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showOverlay: false
      };
    },
    methods: {
      toggleOverlay() {
        this.showOverlay = !this.showOverlay;
        if(this.showOverlay) {
          document.body.classList.toggle("no-scroll");
        }
      },
      closeOverlay() {
        this.showOverlay = false;
        document.body.classList.toggle("no-scroll");
      },
     
    },
    props: {
      OverlayBtnTitle: {
        type: String,
        required: true
      }
    }
  };
  </script>
  