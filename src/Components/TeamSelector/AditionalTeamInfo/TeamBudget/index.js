import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";








const TeamBudget = ({mutateBudget, team_budget}) => {
    return (
    <div className="team_budg">
                <div>
                    <p style = {{marginBottom : '5px'}}>Transfer Budget</p>
                    <p style = {{    paddingLeft: '10px', marginTop: '2px'}}>{mutateBudget(team_budget)}</p>
                </div>
                
                <div style = {{ width: '5%', borderRadius: '25%', border: '1px solid black', paddingLeft: '17px', paddingBottom: '20px', paddingTop: '20px',marginLeft: '10px'}} className>
                <FontAwesomeIcon size = "2x" icon = {faDollarSign}  />
                </div>
            </div>
    )
}



export default TeamBudget;














