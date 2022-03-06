
import FormWrapper from '../../Components/FormWrapper/index'
import Button from '../../Components/Button';

import useRegistrationData from '../../hooks/useRegistrationData';


const Registration = () => {
    const {userData, fillRigthInput, submit} = useRegistrationData({path : 'auth/signup'});
    return (
        <div className="main">
        <div className="outer">
        <h1 style = {{textAlign: 'center'}}>Sing up</h1>
        <FormWrapper>
            <input type = "text" name = "firstname" value = {userData.firstname} onChange = {fillRigthInput} placeholder = "firstName"required />
            <input type = "text" name = "lastname" value = {userData.lastname} onChange = {fillRigthInput} placeholder = "lastName"required />
            <input type = "text" name = "email" value = {userData.email} onChange = {fillRigthInput}  placeholder = "email" required />
            <input type = "password" name = "password" value = {userData.password} onChange = {fillRigthInput} placeholder = "password" required />
            <Button path = 'singup' title="Sing Up" onClick = {submit}/>
        </FormWrapper>
        </div>
        </div>
    )
}


export default Registration;
