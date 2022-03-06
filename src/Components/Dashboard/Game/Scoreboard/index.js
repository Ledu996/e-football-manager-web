
import ScoreInfo from "./ScoreInfo";
import ScoreboardResult from "./ScoreboardResult/index";




const ScoreBoard = () => {
    return (
        <div className = "scoreboard mb1">
            <div className = "scoreboard__container">
                <ScoreInfo/>
                <ScoreboardResult/>
            </div>
        </div>

    )
}

export default ScoreBoard;










