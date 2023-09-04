import { takeEvery, put } from 'redux-saga/effects'
import { FETCH_GEO_POINTS, LOAD_APP_CONFIG, fetchConfigurationSuccess, successGeoPointDataFetch, successGeoPointDataFetchNoData } from './Action';
import axios from 'axios'

/**
 * SAGA - ACTION MAPPING 
 */
export default function* appSagas() {
    yield takeEvery(LOAD_APP_CONFIG, handleAppConfigFetch);
    yield takeEvery(FETCH_GEO_POINTS, handleGeoDataFetch);
}


/**
 * SAGA - IMPLEMENTATION 
 */

// Configuration API - Call
function* handleAppConfigFetch({ api }) {
    const response = yield axios.get(api || '../data/config.json');
    yield put(fetchConfigurationSuccess(response.data));
}

// Handles Geo points API
function* handleGeoDataFetch({ api }) {
    const response = yield axios.get(api || '../data/geo-points.json');
    const geoPointList = response.data.geoPointDataList;
    let invokeAction;
    if (geoPointList && geoPointList.length > 0)
        invokeAction = successGeoPointDataFetch(geoPointList)
    else if (geoPointList && geoPointList.length === 0)
        invokeAction = successGeoPointDataFetchNoData();
    yield put(invokeAction);

}