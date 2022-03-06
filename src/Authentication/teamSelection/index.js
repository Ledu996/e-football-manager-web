
// hooks
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import changeState from '../../hooks/changeState';

// components
import Button from '../../Components/Button/index';
import TeamItem from '../../Components/TeamSelector/TeamItem/index';
import AditionalTeamInfo from '../../Components/TeamSelector/AditionalTeamInfo';

// styles 
import './index.css';

const TeamSelector =  () => {
    
    useEffect(() => {
         doFetch();
   }, []);
    
    const {doFetch, result: items, isLoaded} = useFetch({path: 'auth/signup/teams'}); //body: getItem()
    const {index, LeftArrowChange, RightArrowchange, mutateBudget, submit} = changeState();
    console.log('Items in Team Selector comp', items);
        
    if(items.length === 0 ) {
            return <div>{isLoaded}</div>
        }else {
    
    return (
        <div className="main" style ={{backgroundImage: 'url(https://previews.123rf.com/images/learchitecto/learchitecto1509/learchitecto150900001/44572663-allgemeine-fu%C3%9Fballstadion-mit-fans-auf-der-trib%C3%BCne-sport-spiel-hintergrund-digitale-illustration-mei.jpg)'}}>
            <div className = "content ">
            
            <TeamItem 
            team_name = {items[index].name} 
            team_logo = {items[index].logo} 
            rightArrowChange = {RightArrowchange} 
            leftArrowChange = {LeftArrowChange}/>

            <AditionalTeamInfo
                nickname = {items[index].description.nickname}
                description = {items[index].description.descr}
                mutateBudget = {mutateBudget}
                team_budget = {items[index].budget.transfer_budget}
                location = {items[index].location.city}
                stadium_name = {items[index].stadium.name}
                stadium_capacity = {items[index].stadium.capacity}
            />

        </div>
            <Button title = "Select Team" id = {items[index].id} onClick={submit} path = {'singup/teams'}></Button>
        </div>
    )}
}


export default TeamSelector;




