import React from "react";
import logo from "../Assets/TSE_LOGO.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({}) {
  const [UserName, setUserName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/login",
        {
          UserName,
          PassWord,
        }
      );

      if (response.data.success) {
        const userData = response.data.data;

        localStorage.setItem("admin", JSON.stringify(userData));

        alert(`Welcome, ${userData.displayname_th}!`);

        navigate("/admin/approvebooking");
      } else {
        setError("Login Failed! " + response.data.message);
      }
    } catch (err) {
      setError(err.response?.data.message || "เกิดข้อผิดพลาดในการล็อกอิน");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white p-6">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="absolute top-1">
        <img className="w-150" src={logo} alt="TSE Logo" />
      </div>

      <div className="flex flex-col items-center mt-15">
        <h2 className="text-4xl font-bold text-gray-800 mb-15">
          TSE Meeting Room
        </h2>
        <p className="text-xl font-semibold text-gray-600 ">Sign in</p>

        <form className="mt-10 w-96" onSubmit={handleLogin}>
          <label className="block text-gray-700 font-medium mb-4">Admin</label>
          <input
            type="text"
            className="w-full p-3.5 bg-[#EBEDF1] rounded-md  focus:outline-none"
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label className="block text-gray-700 font-medium mt-8 mb-4">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3.5 bg-[#EBEDF1] rounded-md  focus:outline-none"
            onChange={(e) => setPassWord(e.target.value)}
            required
          />
          <div className="mt-15 text-center">
            <button className="w-30 bg-[#8A2A2B] text-white py-1.5 rounded-md text-lg font-semibold hover:bg-[#621d1e] cursor-pointer">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
