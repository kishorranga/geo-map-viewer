export const createOverlayPopup = ({ pointNum, eastingPoint, northingPoint, depth, layerAmt, markerStyle }) => {

    if (markerStyle?.popupType)
        return _createStyledPopup({ pointNum, eastingPoint, northingPoint, depth, layerAmt })

    return _createDefaultPopup({ pointNum, eastingPoint, northingPoint, depth, layerAmt })

}

function _createDefaultPopup({ pointNum, eastingPoint, northingPoint, depth, layerAmt }) {
    const stylePopupContainer = 'margin-top:10px;border-top:1px solid #E4E7F2;padding-top:10px;padding-bottom:20px;  display: grid;  grid-template-columns: 50% 50%; gap: 10px;';
    const styleTitle = '  color: #a3a5ad; font-size: 13px;';
    const styleValue = ' color: black; font-size: 13px;';
    const styleMetadata = 'color: #0097e6; font-size: 15px; font-weight:bold;padding:4px;margin:4px;padding-left:0px;margin-left:0px';

    return `
   
        <label style="${styleMetadata}">Metadata Details</label>
        <div style='${stylePopupContainer}'>
            <span style='${styleTitle}'>Point#</span>
            <span style='${styleValue}'>${pointNum}</span>
            
            <span style='${styleTitle}'>Easting </span>
            <span style='${styleValue}'>${eastingPoint}</span>
            
            <span style='${styleTitle}'>Northing</span>
            <span style='${styleValue}'>${northingPoint}</span>
            
            <span style='${styleTitle}'>Depth</span>
            <span style='${styleValue}'>${depth}</span>
            
            <span style='${styleTitle}'>Layer Amount [-]</span>
            <span style='${styleValue}'>${layerAmt}</span>
        </div>
       
    `;
}


function _createStyledPopup({ pointNum, eastingPoint, northingPoint, depth, layerAmt }) {
    const stylePopupContainer = 'background:#54a3aa ;border-radius: 10px;margin-top:10px;border-top:1px solid #E4E7F2;padding:10px;padding-bottom:20px;  display: grid;  grid-template-columns: 50% 50%; gap: 10px;';
    const styleTitle = '  color: white; font-size: 13px;font-weight:bold';
    const styleValue = ' color: white; font-size: 13px;';
    const styleMetadata = 'color: #028d9a; font-size: 15px; font-weight:bold;padding:4px;margin:4px;padding-left:0px;margin-left:0px';

    return `
   
        <label style="${styleMetadata}">Metadata Details</label>
        <div style='${stylePopupContainer}'>
            <span style='${styleTitle}'>Point#</span>
            <span style='${styleValue}'>${pointNum}</span>
            
            <span style='${styleTitle}'>Easting </span>
            <span style='${styleValue}'>${eastingPoint}</span>
            
            <span style='${styleTitle}'>Northing</span>
            <span style='${styleValue}'>${northingPoint}</span>
            
            <span style='${styleTitle}'>Depth</span>
            <span style='${styleValue}'>${depth}</span>
            
            <span style='${styleTitle}'>Layer Amount [-]</span>
            <span style='${styleValue}'>${layerAmt}</span>
        </div>
       
    `;
}