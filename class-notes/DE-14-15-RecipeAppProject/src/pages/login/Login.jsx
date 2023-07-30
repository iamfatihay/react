import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //!fake bakend yaptığım için ilk etapta elimle name ve pass belirledim
    localStorage.setItem("username", name);
    localStorage.setItem("password", pass);

    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer >
        <StyledImg src={mealSvg} />
        <Header>{"<Fatih Ay/>"}Recipe</Header>

        <StyledForm onSubmit={handleSubmit} >
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
          <button className="p-2" onClick={()=>navigate("/register")} >Don't you have an account?</button>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
