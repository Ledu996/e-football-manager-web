
import FormWrapper from '../../Components/FormWrapper/index'
import Button from '../../Components/Button/Index';

const Registration = () => {
    return (
        <FormWrapper>
            <input type = "text" required />
            <input type = "text" required />
            <input type = "text" required />
            <input type = "text" required />
            <Button title="Sing Up"/>
        </FormWrapper>
    )
}


export default Registration;

