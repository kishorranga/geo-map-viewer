import L from "leaflet";
/**
 * 
 * @param eastingPoint numeric value 
 * @param northingPoint  numeric value 
 * @returns lat lng expression. 
 */
export function generateLatLngByEN(eastingPoint, northingPoint) {
    //====  may update if the CRS project... 
    return L.CRS.EPSG3395.unproject(L.point(eastingPoint, northingPoint))
}