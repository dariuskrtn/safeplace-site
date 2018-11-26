import Vue from 'vue';
import Vuex from 'vuex';
import * as Floor from './modules/floor';
import * as Camera from './modules/camera';
import * as Person from './modules/person';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    floor: Floor.app,
    camera: Camera.app,
    person: Person.app
  }
});
