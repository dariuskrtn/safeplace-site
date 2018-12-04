import Api from '../../api/Api';
import Vuex from 'vuex'
import {DefineActions, DefineGetters, DefineMutations} from "vuex-type-helper";
import * as config from '../../api/config';
import Floor from '@/models/Floor';

export interface State {
    currentFloor: Floor,
    floorList: Floor[],
}
export interface Getters {}

export interface Actions {
    load: {}
}

export interface Mutations {
    add: {
        floor: Floor
    },
    save: {
        floor: Floor
    }
}

const state: State = {
    currentFloor: new Floor(),
    floorList: [],
}

const mutations: DefineMutations<Mutations, State> = {
    add(state, { floor }) {
        state.floorList.push(floor);
    },
    save(state, { floor }) {
        return Api().post(config.default.api.saveFloor, floor);
    }
    
}

const actions: DefineActions<Actions, State, Mutations, Getters> = {
    load({ commit }, payload) {
        Api().get(config.default.api.getFloors).then(resp => {
            var data: Floor[] = resp.data;
            data.forEach(floor => {
                state.floorList.push(floor);
            });
            
            if (state.floorList.length > 0) state.currentFloor = state.floorList[0];
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