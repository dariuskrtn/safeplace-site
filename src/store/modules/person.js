import Api from '../../api/Api';
import * as config from '../../api/config';

const state = {
    personList: []
}

const actions = {
    loadPeople() {
        Api().get(config.default.personList).then(resp => {
            resp.forEach(person => {
                state.personList.push(person);
            });
        })
    }
}

const mutations = {
    addPerson(person) {
        state.personList.push(person);
    },
    savePerson(person) {
        return Api().post(config.default.savePersonInfo, person);
    },
    savePersonImage(person, image) {
        return Api().post(config.default.savePersonImage, {Person: person, Image: image});
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}