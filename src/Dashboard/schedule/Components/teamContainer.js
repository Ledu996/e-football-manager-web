
// condicional rendering

const TeamContainer = (props) => {
    console.log('Za team: ', props)
    return (
        <div>
            <img src = {props.team_logo} className = "team_logo"/>
            <span>{props.team_name}</span> 
        </div>
    )
}



export default TeamContainer;