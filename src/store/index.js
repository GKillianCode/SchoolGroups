import { createStore } from 'vuex'

export default createStore({
  state: {
    persons: [],
    nbGroup: 0,
  },
  getters: {
    getPersons(state){
      return state.persons;
    },
    getNbGroup(state){
      return state.nbGroup;
    }
  },
  mutations: {
    addPerson(state, name) {
      state.persons.push(name);
    },
    removePerson(state, index) {
      state.persons.splice(index, 1);
    },
    updateGroup(state, nb){
      state.nbGroup = nb;
    }
  },
  actions: {
  },
  modules: {
  }
})
