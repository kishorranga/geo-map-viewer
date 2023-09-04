
import './App.css';
import Header from './components/Header';
import MapViewer from './components/MapViewer';
import FacetPanel from './components/FacetPanel';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppConfiguration } from './store/Action';
import Sidenav from './components/Sidenav'
import { BiInfoSquare, BiErrorAlt } from 'react-icons/bi'

function App() {

  const dispatch = useDispatch();
  const infoMessage = useSelector(state => state?.info)
  const errorMessage = useSelector(state => state?.error)
  const [showInfo, setShowInfo] = useState(false);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    dispatch(fetchAppConfiguration('../data/config.json'));
  }, []);

  useEffect(() => {
    let timerDelay = infoMessage ? 2000 : 5000;
    if (infoMessage || errorMessage) {
      if (infoMessage) setShowInfo(true);
      if (errorMessage) setShowError(true);
      const timer = setTimeout(() => {
        setShowInfo(false);
        setShowError(false);
        clearTimeout(timer);
      }, timerDelay)
    }
  }, [infoMessage, errorMessage]);


  return (

    <div className="App">
      <Header />
      <div className='content-area'>
        <Sidenav />
        <MapViewer />
        <FacetPanel />
      </div>
      {/**Appliation Alert Message */}
      {showInfo && <div className='info-alert-panel' ><BiInfoSquare size='24px' style={{ 'paddingRight': '5px', 'verticalAlign': 'middle' }} />{infoMessage}</div>}
      {showError && <div className='error-alert-panel'><BiErrorAlt size='24px' style={{ 'paddingRight': '5px', 'verticalAlign': 'middle' }} />{errorMessage}</div>}

    </div>
  );
}

export default App;
