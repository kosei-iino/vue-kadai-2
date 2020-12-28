import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ansSex: '',
    ansBirthYear: '',
    ansBirthMonth: '',
    ansBirthDay: '',
    ansInstruction: '',
    ansHospitalization: '',
    ansHospitalizationHistory: '',
    ansConsultation: ''
  },
  mutations: {
    setTopPage(state, data) {
      state.ansSex = data.ansSex
      state.ansBirthYear = data.ansBirthYear
      state.ansBirthMonth = data.ansBirthMonth
      state.ansBirthDay = data.ansBirthDay
    },
    setQuestionnairePage(state, data) {
      state.ansInstruction = data.ansInstruction
      state.ansHospitalization = data.ansHospitalization
      state.ansHospitalizationHistory = data.ansHospitalizationHistory
    },
    setContentPage(state, data) {
      state.ansConsultation = data.ansConsultation
    }
  }
})