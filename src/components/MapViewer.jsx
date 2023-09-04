import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { createOverlayPopup } from '../utils/TemplateUtils'
import getMap from './MapBase'
import MarkerFactory, { MarkerTypes } from '../utils/MarkerFactory'
import { fetchGeoPoints } from "../store/Action";
import { useDispatch, useSelector } from 'react-redux'
import 'leaflet/dist/leaflet.css';
import { generateLatLngByEN } from "../utils/MapUtils";


export default function MapViewer() {
    const dispatch = useDispatch();
    const pointData = useSelector(state => state.geoPointsList);
    const selectedPoint = useSelector(state => state.selectedPoint);
    const config = useSelector(state => state.appConfig);

    /**  
     * FETCH POINTS DATA FROM STORE.....
     **/

    useEffect(() => {
        if (config) {
            dispatch(fetchGeoPoints(config?.env?.pointApiUrl));
        }
    }, [config]);

    /**  
     * PLOT POINTS ONCE RECEIVICED GEO POINTS FROM STORE.....
     **/

    useEffect(() => {
        if (pointData) {
            const markerFactory = new MarkerFactory();
            const map = getMap(config?.mapConfig);
            pointData.forEach(point => {
                const marker = markerFactory.generate(MarkerTypes.DEFAULT_MARKER, point).addTo(map);
                marker.bindPopup(createOverlayPopup(point),
                    { minWidth: 240, keepInView: true }).openPopup();
                marker.closePopup();
            });
        }
    }, [pointData, config])

    /**  
     * Pan to selected cordinates
     **/
    useEffect(() => {
        if (selectedPoint) {
            const map = getMap(config?.mapConfig);
            map.panTo(generateLatLngByEN(selectedPoint.eastingPoint, selectedPoint.northingPoint))
        }
    }, [selectedPoint])
    /**
     * Map Container Div
     */
    return <div id="map" style={{ height: "95vh", width: '100%' }}></div>;
}