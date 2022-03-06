import { useState, useEffect, useCallback } from "react";
import useLocalStorage from './useLocalStorage';


const useFetch = ({path, method, body}) => { // usecallback
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const {getItem, deleteItem} = useLocalStorage()
    
    
    const doFetch = useCallback( () => {
         const token = getItem();

         return fetch(`http://127.0.0.1:5000/${path}`, {
                credentials: 'include',
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': token ?  `Bearer ${token}` : undefined
                    },
                 method: method,
                 body : JSON.stringify(body)
             })
            .then((res) =>{ 
                console.log('Odgovor', res);
                return res.json();
            })
            .then(statusCode => statusCode.status === 401 ? deleteItem() : undefined)
            
            .then((data) => {
                setIsLoaded(true);
                setItems(data);
                return data;
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )
        }, [body])
        
        return { doFetch, result:items, isLoaded, error }
    }



export default useFetch;