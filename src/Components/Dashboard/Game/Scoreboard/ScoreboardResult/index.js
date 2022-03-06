
import HomeTeam from "./HomeTeam/index";
import ScoreboardSemafor from "./Result";
import AwayTeam from "./AwayTeam/index";


const ScoreboardResult = () => {
    return (
        <div className="result__container">
            <HomeTeam/>
            <ScoreboardSemafor/>
            <AwayTeam/>
        </div>
    )
}


export default ScoreboardResult;