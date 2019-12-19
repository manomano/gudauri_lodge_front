export const state = () => ({
  locales: ['en', 'ka'],
  locale: 'en',
  intro: {},
  roomGeneral: {},
  spa_gym: {},
  khasheria: {},
  services: [],
  //imageLinkPrefix: 'http://homestead.test/storage/'
});


export const mutations = {
  setAll(state, data) {
    for (let prop in data) {
      if (state.hasOwnProperty(prop)) {
        state[prop] = data[prop];
      }
    }
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};

export const actions = {

  async nuxtServerInit(context) {


    return this.$axios.get('http://homestead.test/api/home')
      .then(response => {
        if (response.data.success) {
          context.commit('setAll', response.data.data);
        }

      });
  },


};









