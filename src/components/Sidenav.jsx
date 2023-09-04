
import { BiMap, BiSliderAlt } from "react-icons/bi";

function Sidenav() {

    return (
        <div className='side-nav-container'>
            <div className="menu-item-style active">
                <BiMap color="white" size="2em" style={{ 'padding': '8px' }} />
            </div>
            <div className="menu-item-style disabled" title="Feature coming soon...">
                <BiSliderAlt color="white" size="2em" style={{ 'padding': '8px' }} />
            </div>

        </div>
    )
}
export default Sidenav;