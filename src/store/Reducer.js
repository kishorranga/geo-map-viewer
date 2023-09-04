import {
    LOAD_APP_CONFIG_SUCCESS, UPDATE_SELECTED_POINT,
    SUCCESS_GEO_POINTS,
    FAILED_GEO_POINTS,
    SUCCESS_GEO_POINTS_EMPTY_DATA
} from "./Action"

const initialState = {
    geoPointsList: [],
    selectedPoint: null,
    appConfig: null,
    error: null,
    info: null,
}

export const geoReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_APP_CONFIG_SUCCESS:
            return {
                ...state,
                appConfig: action.payload
            }
        case SUCCESS_GEO_POINTS:
            return {
                ...state,
                geoPointsList: action.payload || action.data,
                info: "Geographic points data has been successfully loaded."
            }
        case FAILED_GEO_POINTS:
            return {
                ...state,
                geoPointsList: [],
                error: action.error
            }
        case SUCCESS_GEO_POINTS_EMPTY_DATA:
            return {
                ...state,
                geoPointsList: [],
                info: "No Points data found!"
            }
        case UPDATE_SELECTED_POINT:
            return {
                ...state,
                selectedPoint: action.payload
            }
        default:
            return state;
    }
}