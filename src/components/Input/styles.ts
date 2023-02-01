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

input:focus + label, input:not(:placeholder-shown) + label {
  top: -12px;
  left: 10px;

  background: var(--color-primary);
  height: fit-content;

  border-radius: 14px;
  padding: 4px 10px;

  color: #000;
  font-size: 14px;
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