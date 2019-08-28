<template>
  <v-container fluid>
    <v-layout
      text-xs-center
      wrap
      align-center justify-space-around fill-height
    >
      <v-flex xs6 text-xs-center>
        <v-img
          :src="require('../assets/logo.webp')"
          class="my-3"
          contain
          height="120"
        ></v-img>
        <div class="display-2 font-weight-medium text-md-center">
          Fazer Amigos,
          Conquistar Emprego,
          Ganhar Dinheiro!
        </div>
        <div class="headline font-weight-light ">
          Networking ajudando quem precisa, oportunidade para
          alguns e diversão para outros.
        </div>
        <v-btn round color="primary" dark>
          Google Play
          <!-- <v-icon right dark>cloud_upload</v-icon> -->
        </v-btn>
        <v-btn round color="primary" dark>
          Apple Store
          <!-- <v-icon right dark>cloud_upload</v-icon> -->
        </v-btn>
      </v-flex>
      <v-layout justify-space-around>
        <Swiper/>
      </v-layout>

      <v-container grid-list-md text-xs-center align-content-center justify-center>
        <Cards/>
      </v-container>

    </v-layout>
  </v-container>
</template>

<script>
import Swiper from './Swiper'
import Cards from './Cards'

export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    Cards
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuetifyjs.com'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }

    ]
  })
}
</script>

<style>

</style>
