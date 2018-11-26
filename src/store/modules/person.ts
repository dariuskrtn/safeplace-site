import Api from '../../api/Api';
import {DefineActions, DefineGetters, DefineMutations} from "vuex-type-helper";
import * as config from '../../api/config';
import Person from '@/models/Person';
import { createNamespacedHelpers } from 'vuex'

export interface State {
    personList: Person[]
}
export interface Getters {}

export interface Actions {
    load: {}
}

export interface Mutations {
    add: {
        person: Person
    },
    saveInfo: {
        person: Person
    },
    saveImage: {
        person: Person,
        image: ImageBitmap
    },
}

const state: State = {
    personList: [],
}

const mutations: DefineMutations<Mutations, State> = {
    add(state, { person }) {
        state.personList.push(person);
    },
    saveInfo(state, { person }) {
        return Api().post(config.default.api.savePersonInfo, person);
    },
    saveImage(state, { person, image}) {
        return Api().post(config.default.api.savePersonImage, {Person: person, Image: image});
    },
}

const actions: DefineActions<Actions, State, Mutations, Getters> = {
    load({ commit }, payload) {
        Api().get(config.default.api.getPeople).then(resp => {
            var data: Person[] = resp.data;
            data.forEach(person => {
                state.personList.push(person);
            });
        })
    }
  }

  export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('app');
export const app = {
    namespaced: true,
    state: state,
    getters: {},
    mutations: mutations,
    actions: actions
};