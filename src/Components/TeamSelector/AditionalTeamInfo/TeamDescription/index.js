








const TeamDescription = ({nickname, description}) => {
    return (
        <div className = "team_desc">
                <span>Nickname</span>
                <h3>{nickname}</h3>
                <p>{description}</p>
            </div>
    )
}


export default TeamDescription;




