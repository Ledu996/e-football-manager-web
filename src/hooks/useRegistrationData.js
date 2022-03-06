


import { useState } from "react"; // with mutable values
import { useReducer } from "react"; // not with mutable values const [userData, dispatch] = useReducer(fillRigthInput, data)
import { useNavigate } from "react-router-dom";
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

// mutable state tipically updates with useState()
// useReducer not with mutable states

const useRegistrationData = ({path}) => {
    const data = {firstname : '', lastname : '', email : '', password: ''};
    const [userData, setUserData] = useState(data);
    
    const {doFetch} = useFetch({path, method : 'POST', body : userData});
    const {setItem} = useLocalStorage();
    
    let navigate = useNavigate();
    
    function fillRigthInput (event) { // ({}) isto sto i return obj
        const {name, value} = event.target
        setUserData(prev => ({
            ...prev,
            [name] : value
    }))
}

async function submit () {
   const result = await doFetch();
   console.log(result);
   setItem(result.accToken);
   navigate('/team');
}

return {userData, fillRigthInput, submit}

}


export default useRegistrationData;