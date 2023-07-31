import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, pass);
    // navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer >
        <StyledImg src={mealSvg} />
        <Header>{"<Fatih Ay/>"}Recipe</Header>

        <StyledForm onSubmit={handleSubmit} >
          <StyledInput
            type="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
          {/* <div className="flex justify-between">
            <span
              onClick={() => forgotPassword(email)}
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
            >
              Forgot Password
            </span>
            <Link
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
              to="/register"
            >
              Sign Up
            </Link>
          </div> */}

          <StyledButton type="submit">Login</StyledButton>
          <button className="p-2" onClick={() => navigate("/register")} >Don't you have an account?</button>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
