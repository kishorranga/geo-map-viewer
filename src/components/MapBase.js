import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { getLayers } from "../utils/TileLayers";

const getMap = (function () { // self invoked function - ES6 -  IIFI
    let map;
    const createMyMap = (mapConfig) => {
        function initMap(cnf) {
            let container = L.DomUtil.get("map");
            if (container != null) {
                container._leaflet_id = null;
            }
            map = L.map("map", { dragging: cnf?.draggingFlag || true })
                .setView(cnf?.defaultSetViewLatLng || [31.505, -0.09], cnf?.deafultZoomLevel || 7);
            let DefaultIcon = L.icon({
                iconUrl: icon,
                shadowUrl: iconShadow
            });
            const layerControl = L.control.layers(getLayers(map));
            layerControl.addTo(map);

            L.Marker.prototype.options.icon = DefaultIcon;
            return map;
        }
        if (!map) initMap(mapConfig);
        return map
    }
    return createMyMap;
})()
export default getMap;
