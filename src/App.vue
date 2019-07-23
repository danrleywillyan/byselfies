<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BySelfie </span>
        <span class="font-weight-light">Conectando Você</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://play.google.com/store/apps/details?id=com.byselfies.byselfies"
        target="_blank"
      >
        <span class="mr-2">Instale agora</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
