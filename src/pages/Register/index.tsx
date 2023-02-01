// import React from "react";
import { useState } from "react";
import { Button } from "../../Button";
import Input from "../../components/Input";
import { Form } from "../../styles/Form";
import { Main } from "../../styles/Main";
import { Steps } from "./styled";

const Register = () => {

  const [step, setStep] = useState(1)

  return (
    <Main>
      <Form>
        <fieldset>
          <legend>Cadastro:</legend>
          <Steps step={step}>
            <div></div>
            <div></div>
          </Steps>
        {
          step === 1 ?
            <div>
              <Input 
                id='name' 
                name='name' 
                label='Name:' 
                type='text'
                />
                
              <Input 
                id='email' 
                name='email' 
                label='E-mail:' 
                type='email'
              />
              <Button variant='inline' type="button" onClick={() => setStep(2)}>Proximo</Button>
            </div>
        :
        
          step === 2 &&
          <div>
            <Input 
              id='password' 
              name='password' 
              label='Senha:' 
              type='password'
              />
            <Input 
              id='confirm-password' 
              name='confirm-password' 
              label='Confirme a senha:' 
              type='password'
              />
              <Button variant="inline" type="button" onClick={() => setStep(1)}>Voltar</Button>
              <Button variant="primary" type="submit">Cadastrar</Button>
          </div>
        }
        </fieldset>
        </Form>
    </Main>
  )
}

export default Register;