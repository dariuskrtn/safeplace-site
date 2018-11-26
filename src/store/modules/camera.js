import Api from '../../api/Api';
import * as config from '../../api/config';

const state = {
    cameraList: [],
}

const actions = {
    loadCameras() {
        Api().get(config.default.cameraList).then(resp => {
            resp.forEach(camera => {
                state.cameraList.push(camera);
            });
        })
    }
}

const mutations = {
    addFloor(camera) {
        state.cameraList.push(camera);
    },
    saveFloor(camera) {
        return Api().post(config.default.saveCamera, camera);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}