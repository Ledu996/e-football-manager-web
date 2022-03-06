
const scheduleHeading = (props) => {
    console.log('Heading', props.matchDay)
    return (
        <div>
            <span></span><span className = "title">{props.matchDay}</span><span>.</span>
        </div>
    )
    
}


export default scheduleHeading;




