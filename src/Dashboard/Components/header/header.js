import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import './header.css';





const Header = () => {
    return (
        <header className = "header">
            <div className="option"><FontAwesomeIcon style = {{height: '30px', width: '50px'}} icon = {faPowerOff}></FontAwesomeIcon></div>
        </header>
    )
}


export default Header;








