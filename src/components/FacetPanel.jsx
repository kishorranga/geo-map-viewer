
import { useSelector, useDispatch } from 'react-redux'
import { updateSelectedPointAction } from '../store/Action';
import { BiListUl, BiSearch } from "react-icons/bi";
import { useEffect, useRef, useState } from 'react';


function FacetPanel() {

    const points = useSelector(state => state.geoPointsList);
    const [pointList, setPointList] = useState([]);
    const dispatch = useDispatch();
    const searchRef = useRef();
    const handleClick = (pointItem) => {
        dispatch(updateSelectedPointAction(pointItem))
    }

    const handleSearch = () => {
        if (String(searchRef.current.value).length > 0) {
            let keyword = String(searchRef.current.value).toLowerCase();
            let data = points.filter(item => !String(item.pointNum).toLowerCase().indexOf(keyword))
            setPointList(data);
        }
        else
            setPointList(points)
    }

    useEffect(() => {
        setPointList(points)
    }, [points])
    return (<div className="right-info-panel">

        <span className="info-panel-title"><BiListUl size='2em' style={{ 'padding': '6px', 'verticalAlign': 'middle' }} /> Geo Points ({pointList?.length})</span>
        <div className='search-panel'><input placeholder='Search by point...' type='text' ref={searchRef} onKeyDown={() => handleSearch()} className='search-input' /><BiSearch size='1.5em' color='silver' style={{ 'padding': '8px 0px 0px 0px' }} /></div>
        <div className='filter-container'>
            {pointList.map(item => <div key={item.pointNum} onClick={() => handleClick(item)} className='filter-point-item'>
                <span className='title'>Point</span>
                <span className='data-value'>{item.pointNum}</span>

                <span className='title'>Depth</span>
                <span className='data-value'>{item.depth}</span>

                <span className='title'>Layer</span>
                <span className='data-value'>{item.layerAmt}</span>

            </div>)}
        </div>
    </div>)
}

export default FacetPanel