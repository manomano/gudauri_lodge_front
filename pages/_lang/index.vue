<template>
  <div class="container">
    <h1>Welcome!</h1>
   <!-- <menuBar/>-->
    <p><nuxt-link to="/rooms">rooms page</nuxt-link></p>
    <div v-for="service in services">
      {{service.title}}
    </div>
  </div>
</template>

<style>
  .container {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    padding: 60px;
  }
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
