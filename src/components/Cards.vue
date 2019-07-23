<template>
    <v-layout row wrap>
        <Card
          v-for="asset in assets"
          v-bind:key="asset.id"
          v-bind:image="asset.img"
          v-bind:title="asset.title"
          v-bind:text="asset.text"
        ></Card>
    </v-layout>
</template>

<style lang="stylus">
/* .no-absolute { position: !relative; } */
</style>

<script>
import Card from './Card.vue'

export default {
  name: 'Cards',
  components: {
    Card
  },
  data: () => ({
    assets: [
      {
        id: '0',
        img: require('../assets/cards-images/search.webp'),
        title: 'ENCONTRAR PESSOAS PRÓXIMAS',
        text: 'Arraste o dedo até o limite de 20 km e pronto. As pessoas aparecerão na palma da sua mão, conforme a distância escolhida.'
      },
      {
        id: '1',
        img: require('../assets/cards-images/friends.webp'),
        title: 'VER AMIGOS',
        text: 'Onde estiver, agora você pode saber se tem algum amigo por perto, filtrando apenas os seus contatos na busca por distância.'
      },
      {
        id: '2',
        img: require('../assets/cards-images/location.webp'),
        title: 'LOCALIZAÇÃO',
        text: 'Você pode se tornar invisível nas buscas, simplesmente desabilitando a sua localização através da função localização no quadro Menu.'
      },
      {
        id: '3',
        img: require('../assets/cards-images/freezer.webp'),
        title: 'GELADEIRA',
        text: 'A qualquer momento, você pode colocar seus contatos na geladeira, ficando as mensagens recebidas preservadas para serem lidas posteriormente quando retiradas da geladeira.'
      },
      {
        id: '4',
        img: require('../assets/cards-images/workers.webp'),
        title: 'PRESTADORES DE SERVIÇOS',
        text: 'Encontre prestadores de serviços para suas necessidades ou ofereça seus serviços que você sabe fazer.'
      },
      {
        id: '5',
        img: require('../assets/cards-images/jobs.webp'),
        title: 'VAGAS DE EMPREGO',
        text: 'Encontre novas vagas de emprego todos os dias ou anuncie uma vaga se estiver precisando de alguém para trabalhar.'
      },
      {
        id: '6',
        img: require('../assets/cards-images/block.webp'),
        title: 'BLOQUEAR',
        text: 'Se você bloquear um usuário, o bloqueio se estende às suas mensagens.'
      }
    ]
  })
}
</script>
