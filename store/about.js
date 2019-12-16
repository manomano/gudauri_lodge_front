const state = () => ({
  about: {}
});


const mutations = {
  setAbout(state, data) {
    state.about = data[0];
  },

};
const getters = {
  getAbout: function (state) {
    return state.about;
  }

};


const actions = {
  async fetchContent({commit}) {
    const {data} = await this.$axios.get('http://homestead.test/api/about');
    commit('setAbout', data.data);
  }
};


export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}









