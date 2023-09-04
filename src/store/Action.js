export const FETCH_GEO_POINTS = 'FETCH_GEO_POINTS';
export const SUCCESS_GEO_POINTS = 'SUCCESS_GEO_POINTS';
export const SUCCESS_GEO_POINTS_EMPTY_DATA = 'SUCCESS_GEO_POINTS_EMPTY_DATA';
export const FAILED_GEO_POINTS = 'FAILED_GEO_POINTS';
export const UPDATE_SELECTED_POINT = 'UPDATE_SELECTED_POINT';
export const LOAD_APP_CONFIG = 'LOAD_APP_CONFIG';
export const LOAD_APP_CONFIG_SUCCESS = 'LOAD_APP_CONFIG_SUCCESS'


export const fetchGeoPoints = (apiEndPoint) => {
    return {
        type: FETCH_GEO_POINTS,
        api: apiEndPoint
    }
}

export const fetchAppConfiguration = (api) => {
    return {
        type: LOAD_APP_CONFIG,
        api
    }
}


export const fetchConfigurationSuccess = (configData) => {
    return {
        type: LOAD_APP_CONFIG_SUCCESS,
        payload: configData
    }
}

export function successGeoPointDataFetch(data) {
    const action = {
        type: SUCCESS_GEO_POINTS,
        payload: data
    }
    return action;
}

export function successGeoPointDataFetchNoData() {
    return {
        type: SUCCESS_GEO_POINTS_EMPTY_DATA,
        payload: []
    }
}

export const failedGeoPointDataFetch = (error) => {
    return {
        type: FETCH_GEO_POINTS,
        payload: null,
        error
    }
}

export const updateSelectedPointAction = (pointItem) => {
    return {
        type: UPDATE_SELECTED_POINT,
        payload: pointItem
    }
}