//import axios  from '../plugins/axios';
import axios from 'axios';
export const state = ()=>({
  locales: ['en', 'ka'],
  locale: 'en',
  aboutus: {},
  roomGeneral: {},
  gastronomies: [],
  services: []
});


export const mutations =  {
  setAll (state, data) {
    for (let prop in data){
      if(state.hasOwnProperty(prop)){
        state[prop] = data[prop];
      }
    }
  },
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const actions = {

  async nuxtServerInit ({ commit }, { dispatch  }) {
    return axios.get('http://homestead.test/api/en/home')
      .then(response =>
      {
        commit('setAll', response.data.data);
      });
  },




}









