import ScheduleHeading  from "./scheduleHeader";
import TeamContainer from "./teamContainer";
import TimeContainer from "./timeContainer";

/*
const ScheduleItem = () => {
    return (
        <h1>Zdravo</h1>
        
    )
}
*/

const ScheduleItem = (props) => {

    return (
        <div key = {props.key} className="item">
            <ScheduleHeading matchDay = {props.rounds.number}></ScheduleHeading>
            {props.rounds.games.map((game) => {
                
                return (
                    <div key = {game.id} className="matchBox">
                        <TeamContainer team_name = {game.host.team_name} team_logo = {game.host.team_logo}></TeamContainer>
                        <TimeContainer time = {game.date}></TimeContainer>
                        <TeamContainer team_name = {game.guest.team_name} team_logo = {game.guest.team_logo}></TeamContainer>
                    </div>
                )
            })}
        </div>
    )
}


export default ScheduleItem;






