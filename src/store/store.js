import Vue from 'vue';
import Vuex from 'vuex';
import Floor from './modules/floor';
import Camera from './modules/camera';
import Person from './modules/person';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    floor: Floor,
    camera: Camera,
    person: Person
  }
});
