<template>
  <div style="position: absolute; top:200px">
    <h1>This is the about page</h1>
    <h2>content {{$store.about}}</h2>
    <!--<div v-for="room in rooms">
      <div class="card-title">{{room.title[$store.state.locale]}}</div>
      <div>{{room.description[$store.state.locale]}}</div>

    </div>-->
  </div>
</template>


<script>

    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                about: 'about/getAbout'
            })
        },
        mounted() {
            this.fetchContent();
        },
        methods: {
            ...mapActions({fetchContent: 'about/fetchContent'})
        }

    }

</script>
