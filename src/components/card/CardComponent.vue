<template>
    <div class="card-list__card">
        <div class="card-list__image">
            <picture>
              <source media="(min-width: 48rem)" :srcset="require('@/assets/img/' + srcDesktop)">
              <img :src="require('@/assets/img/' + srcMobile)" loading="lazy"  :alt="title">
            </picture>
            </div>
            <div class="card-list__content">
              <h4 class="card-list__title">{{ title }}</h4>
            <div class="card-list__description">
              <slot></slot>
            </div>
            <router-link class="card-list__link" :to="{ name: listType, params: { itemId: itemId }}">Mehr Informationen</router-link>       
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    listType: {
      type: String,
      required: true,
      default: 'none'
    },
    itemId: {
      type: String,
      require: true,
      default: "1"
    },
    srcDesktop: {
      type: String,
      required: true,
      default: ''
    },
    srcMobile: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type:String,
      required: true,
      default: 'none'
    }
  },
}
</script>