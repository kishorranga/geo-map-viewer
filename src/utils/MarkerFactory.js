import { generateLatLngByEN } from "./MapUtils";
import L from 'leaflet'
import iconCustom from "../images/marker-custom.png";


export const MarkerTypes = {
    DEFAULT_MARKER: 'DEFAULT_MARKER',
    CUSTOM_RED: 'CUSTOM_RED',
    HOUSE_MARKER: 'HOUSE_MARKER'

}

function getIconByType(type) {
    switch (type) {
        case MarkerTypes.CUSTOM_RED:
            return L.icon({
                iconUrl: iconCustom,
                iconSize: [40, 40]
            });
        default:
            return null;
    }
}

class MarkerFactory {


    generate(type, point) {
        const { eastingPoint, northingPoint, markerStyle } = point;
        switch (type) {
            case MarkerTypes.DEFAULT_MARKER:
                return this.__createMarker(eastingPoint, northingPoint, markerStyle?.iconType);
            default:
                return null;
        }
    }

    /**
     * PRIVATE FUNCTION TO GENERATE DEFAULT MARKER.
     * @returns 
     */
    __createMarker(eastingPoint, northingPoint, customIcontype = undefined) {
        let generateLatLngValue = generateLatLngByEN(eastingPoint, northingPoint);
        let marker = L.marker(generateLatLngValue);
        if (customIcontype && getIconByType(customIcontype))
            marker.setIcon(getIconByType(customIcontype))
        return marker;
    }

}
export default MarkerFactory;