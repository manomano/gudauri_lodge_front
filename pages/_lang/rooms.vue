<template>
  <div class="container">
    <h1>This is the rooms page</h1>
    <p><nuxt-link to="/">Home page</nuxt-link></p>
    <div v-for="room in rooms">
      <div class="card-title">{{room.title}}</div>
      <div>{{room.description}}</div>

    </div>
  </div>
</template>



<script>

    import { mapState } from 'vuex'
    export default{
        computed: mapState([
            'rooms'
        ])

    }

</script>
