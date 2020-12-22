import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    ansSex:'',
    ansBirthYear:'',
    ansBirthMonth:'',
    ansBirthDay:'',
    ansInstruction:'',
    ansHospitalization:'',
    ansHospitalizationHistory:'',
    ansConsultation:''
  }
})