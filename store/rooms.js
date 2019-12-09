const state = () => ({
  rooms: []
});


const mutations = {
  setRooms(state, data) {
    state.rooms = data;
  },

};
const getters = {
  getRooms: function (state) {
    return state.rooms;
  }

};


const actions = {
  async fetchRooms({commit}) {
    const {data} = await this.$axios.get('http://homestead.test/api/rooms');
    commit('setRooms', data.data);
  }
};


export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}









