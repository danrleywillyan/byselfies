import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

// Helpers
// import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    'home': 'home',
    'contact': 'perm_phone_msg',
    'product': 'mdi-dropbox',
    'support': 'mdi-lifebuoy',
    'steam': 'mdi-steam-box',
    'pc': 'mdi-desktop-classic',
    'xbox': 'mdi-xbox',
    'playstation': 'mdi-playstation',
    'switch': 'mdi-nintendo-switch'
  },
  theme: {
    primary: '#FF6600',
    secondary: '#40FFD4',
    accent: '#14CC6F',
    error: '#D92414'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
