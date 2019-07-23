<template>
  <Device>
    <swiper
      class="no-absolute"
      :page-transition="pageTransition"
      :loop="loop"
      :autoplay="autoplay"
      :interval="interval"
      :show-indicator="showIndicator"
      >
      <swiper-item>
          <v-img
              :src="require('../assets/screen1.jpeg')"
              class="my-3"
              contain
          ></v-img>
      </swiper-item>
      <swiper-item>
          <v-img
              :src="require('../assets/screen2.png')"
              class="my-3"
              contain
          ></v-img>
      </swiper-item>
    </swiper>
  </Device>
</template>

<style>
/* .no-absolute { position: !relative; } */
</style>

<script>
import { Swiper, SwiperItem } from 'vue-h5-swiper'
import Device from './Device.vue'

const PAGE_TRANSITIONS = [
  'move',
  'fade',
  'cover',
  'carousel',
  'scale',
  'glue',
  'cube',
  'push',
  'three'
]

export default {
  components: {
    Device,
    Swiper,
    SwiperItem
  },

  data () {
    return {
      colors: [
        '#76D7C4',
        '#F1948A',
        '#BB8FCE',
        '#7FB3D5'
      ],
      loop: true,
      autoplay: true,
      interval: 3000,
      showIndicator: false,
      pageTransition: PAGE_TRANSITIONS[5],
      pageTransitions: PAGE_TRANSITIONS
    }
  }
}
</script>
