//import axios  from '../plugins/axios';
import axios from 'axios';
export const state = ()=>({
 rooms: []
});


export const mutations =  {
  setRooms (state, data) {
    state.rooms = data;
  },

}

export const actions = {

  fetch (context) {
    console.log("rooms_fetch");
    return context.store.dispatch('storeDispatchFunc');
  },

  async storeDispatchFunc ({ commit }, { dispatch  }) {

    const { data } = await this.$axios.get('http://homestead.test/api/en/rooms')
    commit('setRooms', data.data);

  },




}









