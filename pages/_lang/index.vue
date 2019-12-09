<template>
  <div>
    <h1>Welcome!</h1>
    <!-- <menuBar/>-->
    <p>
      <nuxt-link to="/rooms">rooms page</nuxt-link>
    </p>
    <div v-for="service in $store.state.services">
      {{service.title[$store.state.locale]}}
    </div>

    <div v-for="el in $store.state.gastronomies">
      {{el.title[$store.state.locale]}}
    </div>

  </div>
</template>

<style>

</style>

<script>

    import {mapState} from 'vuex'

    export default {
        computed: mapState([
            'services', 'gastronomies'
        ])
    }

</script>
