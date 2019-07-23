<template>
  <v-flex md6 xs12 card-stylus>
      <v-card  color="white" class="black--text">
        <v-container grid-list-md>
          <v-layout row wrap justify-space-around>
            <v-flex md2 xs4>
              <v-img :src="image" aspect-ratio="1" min-height="100px" max-height="130px" contain>
              </v-img>
            </v-flex>
            <v-flex md10 xs12>
              <v-card-title primary-title>
                <div>
                  <div class="title secondary--text">{{ title }}</div>
                  <p class="text-xs-left">{{ text }}</p>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
  </v-flex>
</template>

<style lang="stylus">
/* .no-absolute { position: !relative; } */
  .card-stylus
    margin: 1% 0
</style>

<script>
export default {
  name: 'Card',
  components: {
  },
  props: ['image', 'title', 'text']
}
</script>
