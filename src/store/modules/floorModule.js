import Api from '../../api/Api';
import * as config from '../../api/config';

const state = {
    currentFloor: null,
    floorList: [],
}

const actions = {
    loadFloors() {
        Api().get(config.default.floorList).then(resp => {
            resp.forEach(floor => {
                state.floorList.push(floor);
            });
            
            if (state.floorList.length() > 0) state.currentFloor = state.floorList[0];
        })
    }
}

const mutations = {
    addFloor(floor) {
        state.floorList.push(floor);
    },
    saveFloor(floor) {
        return Api().post(config.default.saveFloor, floor);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}