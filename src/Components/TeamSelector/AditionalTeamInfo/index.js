import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import TeamDescription from '../AditionalTeamInfo/TeamDescription/index';
import TeamBudget from '../AditionalTeamInfo/TeamBudget/index';





const AditionalTeamInfo = ({nickname, description, mutateBudget, team_budget, location, stadium_name, stadium_capacity}) => {
    return (
        <div className = "aditional_team_info">
            <TeamDescription nickname = {nickname} description = {description}/>
            <TeamBudget mutateBudget = {mutateBudget} team_budget = {team_budget}/>
            
            <div style = {{display: 'flex'}}>
                <div style = {{ width: '50%',borderRight: '1px solid black'}}><p style = {{textAlign: 'center'}}>{location}</p><FontAwesomeIcon style = {{display: 'block', position: 'absolute', left: '23%'}}size = "3x" icon = {faMapMarkerAlt}></FontAwesomeIcon></div>
                <div>Stadium Capacaty:</div>
                <div>{stadium_name} {stadium_capacity}</div>
            </div>
        
        </div>
    )
}

export default AditionalTeamInfo;