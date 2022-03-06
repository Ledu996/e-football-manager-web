import Button from '../../Components/Button';
import FormWrapper from '../../Components/FormWrapper/index';


import useLoginData from '../../hooks/useLoginData';
import './index.css';

const LogIn = () => {
       
    let {email, password, fillRigthInput, submit } = useLoginData ({pathname : `auth/login`}); 
    return (
        <div className="main">
            <div className="outer">
                <div>
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                </div>
            
                <FormWrapper>
                    <input type= "email" name = "email" value = {email} placeholder="e-mail" onChange = {fillRigthInput} required/>
                    <input type="password" name = "password" value = {password} placeholder="password" onChange = {fillRigthInput} required/> 
                    <Button path = {'login'} state = {'false'} title="Login" onClick={submit}/>
                </FormWrapper> 
            </div>
        </div>
    )
}


export default LogIn;