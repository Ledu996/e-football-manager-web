import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




// className = ""inline arrow_right__position
// style = {{position: "absolute", top: "100px", right: "48px"}}

const RightArrow = ({icon, onClick}) => {
    return <FontAwesomeIcon className = "inline abs top arrow_right__position" icon = {icon} size = '2x' onClick={onClick}></FontAwesomeIcon>   
}


export default RightArrow;















