import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      ansSex: '',
      ansBirthYear: '',
      ansBirthMonth: '',
      ansBirthDay: '',
      ansInstruction: '',
      ansHospitalization: '',
      ansHospitalizationHistory: '',
      ansConsultation: ''
    }
  },
  mutations: {
    setUser(state, data) {
      Object.assign(state.user, data);
    }
  }
})