import React, { useState } from "react";
import Input from "../../components/Input";
import { Form } from "../../styles/Form";
import { Main } from "../../styles/Main";
import { Button } from "../../Button";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post("http://127.0.0.1:8090/user/login", {
      email,
      password
    });
    console.log(response.data);
  };

  return (
    <Main>
      <Form onSubmit={submitForm}>
        <fieldset>
          <legend>Login:</legend>
          <label htmlFor="email">Email:</label>
          <div>
            <br />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required label={""} />
          </div>
          <br />
          <br />
          <label htmlFor="password">Senha:</label>
          <div>
            <br />
            <Input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required label={""} />
          </div>
          <br />
          <br />
          <Button variant="primary" type="submit">Fazer Login</Button>
        </fieldset>
      </Form>
    </Main>
  );
};

export default Login;