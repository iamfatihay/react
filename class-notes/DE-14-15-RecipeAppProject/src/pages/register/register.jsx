import React, { useContext, useState } from "react";
import GoogleIcon from "../../assets/GoogleIcon";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const { createUser, signUpProvider } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
  };

  return (
    <div className="overflow-hidden flex-1 h-97vh justify-center items-center bg-[#b6b9c9]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#753939] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form
          className="absolute inset-[2px] rounded-[8px] bg-gray-100 z-[0] flex flex-col py-[50px] px-[40px]"
          onSubmit={handleSubmit}
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="firstname"
              id="firstName"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="lastname"
              id="lastName"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn-danger" type="submit">
            Register
          </button>
          <button
            className="btn-danger flex justify-between items-center"
            type="button"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;