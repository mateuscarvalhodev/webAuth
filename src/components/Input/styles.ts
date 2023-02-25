import styled from "styled-components";

export const Container = styled.div`
height: 48px;
position: relative;
display: flex;
align-items: center;

background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 6px;
padding: 0 15px;

color: var(--color-text);

:focus-within {
  border-color: var(--color-primary);
}

transition: all 0.3s ease-out;

input {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: var(--color-primary);
  padding: 5px;
  font-size: 16px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--color-primary);
  /* -webkit-box-shadow: 0 0 0px 1000px #0000 inset; */
  transition: background-color 5000s ease-in-out 0s;
}

label {
  display: flex;
  align-items: center;
  height: 100%;

  position: absolute;
  top: 0;
  left: 12px;

  transition: top 0.5s, left 0.3s ease-out;
}

input:focus ~ svg {
  color: var(--color-primary);
}

svg {
  width: 18px;
  height: 18px;
}

& + & {
  margin-top: 32px;
}
`;