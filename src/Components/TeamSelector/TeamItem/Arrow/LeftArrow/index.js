import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// className = "left_arrow_position"

// fontAwsome className = "inline abs left_arrow_position"


// style = {{position: "absolute", top: "100px", left : "20px"}}
const LeftArrow = ({icon, onClick}) => {
    return <FontAwesomeIcon  className = "inline abs top left_arrow_position" size= '2x' icon = {icon}  onClick={onClick}></FontAwesomeIcon>
    
}


export default LeftArrow;















