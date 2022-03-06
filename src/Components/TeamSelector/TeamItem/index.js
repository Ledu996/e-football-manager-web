import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';


import TeamHeading from "./TeamHeading/index";
import Star from "./Star/index";
import LeftArrow from "./Arrow/LeftArrow/index";
import RightArrow from "./Arrow/RightArrow/index";
import OverAll from '../TeamItem/OverAll';


const TeamItem = ({team_name, team_logo, rightArrowChange, leftArrowChange}) => {
    return (
        <div className = "team_item" style={{border: "1px solid black"}}>
                <TeamHeading team_name = {team_name} ></TeamHeading>
                
                <div className ="item_body">
                    
                    <div className = "item_img">
                        <LeftArrow icon = {faCaretLeft} id ={1} onClick = {leftArrowChange}></LeftArrow>
                        <img src = {team_logo}/>
                        <RightArrow icon = {faCaretRight} id = {2} onClick = {rightArrowChange}></RightArrow>
                    </div>
                    
                <Star arr = {[1,2,3,4,5]} icon = {faStar}/>
                <OverAll/>
            </div>
        </div>
    )
    
}



export default TeamItem;




/*<div className = "team_item" style={{border: "1px solid black"}}>
                <TeamHeading team_name = {name} ></TeamHeading>
                
                <div className ="item_body">
                    
                    <div className = "item_img">
                        <LeftArrow icon = {faCaretLeft} id ={1} onClick = {changeTeam}></LeftArrow>
                        <img src = {logo}/>
                        <RightArrow icon = {faCaretRight} id = {2} onClick = {changeTeam}></RightArrow>
                    </div>

                <Star arr = {[1,2,3,4,5]} icon = {faStar}></Star>
                
                <div className = "overall">
                    <div className = " numbers inline"><p>ATT</p><p className = "digit">{index}</p></div>
                    <div className = "numbers inline"><p>MID</p><p className = "digit">0</p></div>
                    <div className = "numbers inline"><p>DEF</p><p className = "digit">0</p></div>
                </div>
            </div>
        </div>
    )*/

