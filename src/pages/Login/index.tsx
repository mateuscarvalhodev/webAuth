import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Button } from "../../Button";
import Input from "../../components/Input";
import { Form } from "../../styles/Form";
import { Main } from "../../styles/Main";

const Login = () => {
  return (
    <Main>
      <Form>
        <fieldset>
          <legend>Login:</legend>
        <Input 
        id='name' 
        name='name' 
        label='Name:' 
        type='text'
        >
          <FaUser />
        </Input>
        <Input 
        id='password' 
        name='password' 
        label='Senha:' 
        type='password'
        >
        <MdPassword />
        </Input>
        <Button variant="primary">Logar</Button>
        </fieldset>
      </Form>
    </Main>
  )
}

export default Login;