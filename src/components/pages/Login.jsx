import React from "react";
import logo from "../Assets/TSE_LOGO.png";

function Login() {
  return (
    <div className="h-screen bg-white">
      <div className="ml-105 pt-16">
        <img className="" src={logo} alt="" />
      </div>
      <body className="pt-16">
        <div className="h-650px grid mx-auto w-96 h-96">
          <h2 className="justify-self-center font-bold text-4xl">
            TSE Meeting Room
          </h2>
          <h2 className="justify-self-center text-2xl pt-16">Sign in</h2>
          <h2 className="pt-10">Admin</h2>
          <label className="my-4">
            <input
              type="text"
              className="h-14 w-96 border-2 border-black rounded-lg text-2xl border-opacity-50"
            />
          </label>
          <h2>Password</h2>
          <label className="my-4">
            <input
              type="text"
              className="h-14 w-96 border-2 border-black rounded-lg text-2xl border-opacity-50"
            />
          </label>
          <button className="bg-red-600 text-white w-20 h-8 justify-self-center mt-10 rounded-lg">
            sign In
          </button>
        </div>
      </body>
    </div>
  );
}

export default Login;
