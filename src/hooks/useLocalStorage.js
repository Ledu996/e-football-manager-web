import { useNavigate } from "react-router-dom";



const useLocalStorage = () => { // useTokenLocalStorage
    let navigate = useNavigate();
    const setItem = (item) => {
        if(item === undefined) {}
        localStorage.setItem('token', item);
    };
    
    const getItem = () =>  {
        const item = localStorage.getItem('token');
        console.log('Item u storage', item);
        return item;
    };

    const deleteItem = () => {
        if(!getItem()) console.log('Nothing to delete');
        localStorage.removeItem('token');
        navigate('/login')
        
    };

    return {setItem, getItem, deleteItem};
}

export default useLocalStorage;

