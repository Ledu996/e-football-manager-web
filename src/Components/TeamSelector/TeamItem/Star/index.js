
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';







const Star = ({arr, icon}) => {
    let number = 0;
    return (
            <div className = "stats">
                {
                arr.map((star) => {
                return <FontAwesomeIcon size = "lg" key={number++} className="star"  icon = {icon}></FontAwesomeIcon>
                    })
                }
                </div>
    )         
}


export default Star;