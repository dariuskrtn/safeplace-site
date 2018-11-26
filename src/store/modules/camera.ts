import Api from '../../api/Api';
import Vuex from 'vuex'
import { createNamespacedHelpers } from 'vuex'
import {DefineActions, DefineGetters, DefineMutations} from "vuex-type-helper";
import * as config from '../../api/config';
import Camera from '@/models/Camera';

export interface State {
    cameraList: Camera[];
}

export interface Getters {}

export interface Actions {
    load: {}
}

export interface Mutations {
    add: {
        camera: Camera 
    },
    save: {
        camera: Camera
    }
}

const state: State = {
    cameraList: []
}

const mutations: DefineMutations<Mutations, State> = {
    add(state, { camera }) {
        state.cameraList.push(camera);
    },
    save(state, { camera }) {
        return Api().post(config.default.api.saveCamera, camera);
    }
}

const actions: DefineActions<Actions, State, Mutations, Getters> = {
    load({ commit }, payload) {
        Api().get(config.default.api.getCameras).then(resp => {
            var data: Camera[] = resp.data;
            data.forEach(camera => {
                state.cameraList.push(camera);
            });
        })
    }
  }


export const app = {
    namespaced: true,
    state: state,
    getters: {},
    mutations: mutations,
    actions: actions
};