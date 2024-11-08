// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase"; 

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (currentState === "Login") {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/"); // Redirect after successful login
      } catch (error) {
        console.error(error.message);
        alert("Login failed!");
      }
    } else if (currentState === "Sign Up") {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign Up successful!");
        setCurrentState("Login");
      } catch (error) {
        console.error(error.message);
        alert("Sign Up failed!");
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[96%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5] w-8 bg-gray-800" />
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">Create account</p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">Login Here</p>
        )}
      </div>
      <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
