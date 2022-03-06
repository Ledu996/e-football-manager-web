import { Link } from "react-router-dom";
import './index.css';


function Header () {
    return (
        <div className ="header-wrapper">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/login">Login</Link></li>
                <li> <Link to = "/signup">Sing Up</Link></li>
            </ul>
        </div>
    )
}


export default Header;