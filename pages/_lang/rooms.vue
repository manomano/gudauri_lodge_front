<template>
  <div>
    <h1>This is the rooms page</h1>
    <div v-for="room in rooms">
      <div class="card-title">{{room.title[$store.state.locale]}}</div>
      <div>{{room.description[$store.state.locale]}}</div>

    </div>
  </div>
</template>


<script>

    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                rooms: 'rooms/getRooms'
            })
        },
        mounted() {
            this.fetchRooms();
        },
        methods: {
            ...mapActions({fetchRooms: 'rooms/fetchRooms'})
        }

    }

</script>
