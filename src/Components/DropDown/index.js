import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";




const Dropdown = ({children}) => {
    const {doFetch, result: items, isLoaded, error} = useFetch({path: 'auth/singup/teams'});

    useEffect(() => {
        doFetch();
    }, []);

    if(error) {
        return <div>{error.message}</div>;
    }else if(!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        console.log(items)
        return(
        <select style={{position: 'absolute', top: '95%', left: '5px', zIndex: 1, marginBottom: '5px'}}>
            
            {items.map(team => {
                return <option key = {1} value = {1}>{team.team_name}</option>
            })}
        </select>
        )
    }
}

export default Dropdown;




