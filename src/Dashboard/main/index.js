
import './index.css'
import useWindowResize from '../../hooks/useWindowResize';
import DashKickOff from '../../Components/Dashboard/Main/DashKickOff.js';
import {useEffect} from 'react';




const Main = () => {
    useEffect(() => {
        WindowDimensions();
    }, []);

    const {WindowDimensions} = useWindowResize();
    
    return (
        <div className="main">
            <div className="content dash">
                <DashKickOff/>
            </div>
        </div>
    )
}

 export default Main;











