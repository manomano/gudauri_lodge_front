<template>
  <div>
    <h1>Welcome!</h1>
   <!-- <menuBar/>-->
    <p><nuxt-link to="/rooms">rooms page</nuxt-link></p>
    <div v-for="service in services">
      {{service.title}}
    </div>
  </div>
</template>

<style>

</style>

<script>

  import { mapState } from 'vuex'
  import menuBar from '~/components/menuBar'
  export default{
      components: {
          menuBar

      },

      computed: mapState([
          'services','rooms', 'gastronomies'
      ])

  }

</script>
