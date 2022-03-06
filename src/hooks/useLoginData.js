
import { useState } from "react";
import useFetch from './useFetch';
import Router from '../Router/index';


const ErrorHandler = (message) => {
    return (
        <div>{message}</div>
    )
}

const useLoginData = ({pathname}) => { // ?email= ${email} && password= ${password}
    
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const {doFetch} = useFetch({path : `${pathname}/${email}/${password}`, method : 'GET'});

    function fillRigthInput (event) {
        event.target.name === 'email' ? setEmail(email = event.target.value) : setPassword(password = event.target.value);
    }

    //console.log(url)

    /*function changeStatus () {
        setUrl((prev) => ({
            ...prev,
            ['href'] : url.searchParams.append('email =', email)
        }))
    }*/
    
    function submit () {
        doFetch();
        
        //.then((cond) => {return cond.status === 200 ? <ErrorHandler message={cond.message}/> : <ErrorHandler message={cond.message}/>;})
    }
    
    return {email, password, fillRigthInput, submit}
}


export default useLoginData;