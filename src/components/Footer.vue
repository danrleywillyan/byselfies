<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-layout row wrap>
        <v-flex md6 xs12>
          <v-card-text md12 xs12 class="white--text pt-0 sm6">
            Se você gostou da ideia e quer se cadastrar, basta ir para o topo e
            instalar o aplicativo na loja do seu celular. Se você quer saber mais
            informações sobre o aplicativo, deixar uma ideia de melhoria ou, até
            mesmo, reportar um bug no app é só entrar em contato conosco pelo whatsapp
            ou pelo email.
            Nossa equipe agradece seu contato.
          </v-card-text>
          <p class="">
            byselfie@gmail.com <br> (61) 3384-8293
          </p>
          <a href="https://api.whatsapp.com/send?phone=5561999926977&text=Estou%20entrando%20em%20contato%20depois%20de%20ver%20o%20site%20do%20BYSELFIE."
            target="_blank"
            style="color: white;"
          >
            Whatsapp
          </a>
        </v-flex>
        <v-flex md6 xs12>
          <v-layout align-center column>
            <v-btn
              class=""
              outline
              color="white"
              @click="top"
            >
              <v-icon>fas fa-arrow-up</v-icon>
              Topo
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

<v-flex fluid ma-0 xs12 md12 lg12>
      <v-card-actions class="justify-center">
        &copy;{{ new Date().getFullYear() }}
        — Feito por&nbsp;
        <strong>
          <a
            href="https://danrleywillyan-blog.firebaseapp.com"
            target="_blank"
            style="color: white;"
          >
            Danrley Pereira
          </a>
        </strong>
        &nbsp;do&nbsp;
        <strong>
          <a
            href="https://empresa.gamacidadao.com.br"
            target="_blank"
            style="color: white;"
          >
            Gama Cidadão
          </a>
        </strong>!
      </v-card-actions>
    </v-flex>
    </v-card>
  </v-footer>
</template>

<style lang="stylus">
/* .no-absolute { position: !relative; } */
</style>

<script>
export default {
  name: 'Footer',
  data: () => ({
    conditions: false,
    zIndex: 0,
    opacity: 0.5,
    absolute: true,
    icons: [
      'fab fa-facebook',
      'fab fa-instagram',
      'fab arrow-up'
    ]
  }),
  methods: {
    top () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
  // props: ['image', 'title', 'text']
}
</script>
