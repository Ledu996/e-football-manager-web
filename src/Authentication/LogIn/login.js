import Button from '../../Components/Button/Index';
import FormWrapper from '../../Components/FormWrapper/index';


const LogIn = () => {
    return (
        <div>
            <FormWrapper>
                <input type="text" placeholder="e-mail" required/>
                <input type="input_form" placeholder="password" required />
                <Button name="Login" title="Login"/> 
            </FormWrapper>

            
        </div>
    )
}


export default LogIn;