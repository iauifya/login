<template>
  <div class="slider_pos">
    <swiper 
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay='{
        "delay": 2500,
        "disableOnInteraction": false
        }'
        :modules="modules"
        class="mySwiper"
      >
      <swiper-slide>
        <img class="swiperImg" src="@/assets/img/one.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiperImg" src="@/assets/img/two.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiperImg" src="@/assets/img/three.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiperImg" src="@/assets/img/four.jpg" />
      </swiper-slide>
    </swiper>
  </div>
</template>
  
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref,defineComponent } from 'vue';
// Import Swiper styles
import 'swiper/css';

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

defineComponent({
  Swiper,
  SwiperSlide
})

let modules = ref([EffectFade, Navigation, Pagination, Autoplay]);
</script>
<style src="../assets/css/style.css" scoped></style>
<style src="../assets/css/custom.css" scoped></style>