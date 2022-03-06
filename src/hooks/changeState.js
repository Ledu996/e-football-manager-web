import { useState } from "react";
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';
import { useNavigate } from "react-router-dom";

const useChangeState = () => {

    let [index, setIndex] = useState(0); 
    let navigate = useNavigate();
    let {doFetch} = useFetch({path : 'auth//signup/teams/selected', method : 'POST', body : {team_id : index + 1}}) //user_id : getItem()
    function LeftArrowChange () {
        setIndex(prev => prev === 0 ? 19 : prev -1);
    }
    function RightArrowchange () {
        setIndex(prev => prev === 19 ? 0 : prev + 1);
    }    
    function mutateBudget(budget) { // formateBudget
        const budgetString = budget.toString();

    return budgetString.length === 9 ? 
        '$' + budgetString.substring(0, 3) + '.' + budgetString.substring(3, 6) + '.'  + budgetString.substring(6, 9) :
        '$' + budgetString.substring(0, 2) + '.' + budgetString.substring(2, 5) + '.' + budgetString.substring(5, 8);
    }

    async function submit () {
        await doFetch();
        navigate('/dashboard/managerInfo');
    }

    
    return {index, LeftArrowChange, RightArrowchange, mutateBudget, submit};
}


export default useChangeState;









