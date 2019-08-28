<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BySelfie </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        href="https://play.google.com/store/apps/details?id=com.byselfies.byselfies"
        target="_blank"
      >
        <span class="mr-2">Instale agora</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
    <v-content>
      <Conditions/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'
import Conditions from './components/Conditions'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
    Conditions
  },
  data () {
    return {
      //
    }
  }
}
</script>
