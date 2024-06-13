<template>
     <swiper
          :effect="'cube'"
          :grabCursor="true"
          :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <picture>
              <source media="(min-width: 48rem)" srcset="@/assets/img/Unbenannt-2@2x.webp">
              <img src="@/assets/img/Unbenannt-2.webp" loading="lazy" alt="image-1">
            </picture>
          </swiper-slide>
          <swiper-slide>
            <picture>
              <source media="(min-width: 48rem)" srcset="@/assets/img/Unbenannt-2@2x.webp">
              <img src="@/assets/img/Unbenannt-2.webp" loading="lazy"  alt="image-2">
            </picture>
          </swiper-slide>
          <swiper-slide>
            <picture>
              <source media="(min-width: 48rem)" srcset="@/assets/img/Unbenannt-2@2x.webp">
              <img src="@/assets/img/Unbenannt-2.webp" loading="lazy"  alt="image-3">
            </picture>
          </swiper-slide>
        </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import '@/assets/css/swiper-custom.css';
// Import required modules
import { EffectCube, Pagination } from 'swiper/modules';
export default {
  name: 'SwiperSlider',
components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination],
    };
  },
}
</script>