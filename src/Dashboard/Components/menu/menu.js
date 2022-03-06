import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './menu.css';





const Menu = () => {
    return (
        <div className="menu">
            <Link to = '/login'>
                <div className="option">
                    <FontAwesomeIcon style={{width: '70px', height: '50px'}} icon={faFutbol}></FontAwesomeIcon>
                </div>
            </Link>

            <Link to = "/standings">
                <div className = "option">
                    <FontAwesomeIcon style={{width: '70px', height: '50px'}} icon={faBars}></FontAwesomeIcon>
                </div>
            </Link>

            <Link to = "/schedule">
                <div className = "option">
                    <FontAwesomeIcon style={{width: '70px', height: '50px'}} icon={faCalendarAlt}></FontAwesomeIcon>
                </div>
            </Link>
            <div className = "option"><FontAwesomeIcon style={{width: '70px', height: '50px'}} icon={faTshirt}></FontAwesomeIcon></div>
            <div className = "option"><FontAwesomeIcon style={{width: '70px', height: '50px'}} icon={faUserTie}></FontAwesomeIcon></div>
        </div>
    )
}


export default Menu;





