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
    console.log("SET_LANG")
    if (state.locales.includes(locale)) {
      console.log("SET_LANG1");
      state.locale = locale;
      console.log("SET_LANG2");
      console.log("SET_LANG3", state.locale)
    }
  }
}

export const actions = {

  async nuxtServerInit (context, pcontext) {
    //console.log("1 nuxtServerInit req=>",pcontext.params.lang);


    return axios.get('http://homestead.test/api/'+pcontext.params.lang+'/home')
      .then(response =>
      {
        if(response.data.success){
          context.commit('setAll', response.data.data);
        }

      });
  },




}









