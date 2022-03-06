import './schedule.css';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// Components
import Carousel from './Components/carousel';
import ScheduleItem from './Components/scheduleItem';
import Menu from '../Components/menu/menu';
import DashHeader from '../Components/header/header';

// Hooks
import { useEffect } from "react";
import useFetch from '../../hooks/useFetch';


 const Schedule = () => {
    
    const {doFetch, result: items, isLoaded, error} = useFetch({path : 'schedule'});
    useEffect(() => {
            doFetch();
        }, [])
        
        if (error) {
            {console.log(error, 'Ja sam', items)}
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {

        return (
            <div className = "main">
                <DashHeader></DashHeader>
                <Carousel>
                    {items.map(round => {return <ScheduleItem key = {round.id} rounds = {round} ></ScheduleItem>})}
                </Carousel>
                <Menu></Menu>
            </div>
        )
    }
}           


export default Schedule;   




/**/




/*

    
                    <div key={item.id} className = "item"> 
                        <ScheduleHeading matchDay = {item.number}></ScheduleHeading>
                        {item.games.map((game, index) => {

                            return (
                    <div key = {game.id} className="matchBox">
                        <div>
                            <img src = {game.host.team_logo} className = "team_logo"/>
                            <span>{game.host.team_name}</span> 
                        </div>

                        <div>
                            <span>{game.date}</span>
                        </div>
                    
                    <div>
                        <span>{game.guest.team_name}</span>
                        <img src = {game.guest.team_logo} style = {{width: '30px', height : '30px'}}/>
                    </div>
                    
                    </div>
                            )
                        })}
                    </div>

*/