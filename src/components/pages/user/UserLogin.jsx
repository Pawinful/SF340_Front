import React from "react";
import logo from "../../Assets/TSE_LOGO.png";
import { useRef, useState, useEffect } from "react";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (
        <section
          className="h-screen flex flex-col items-center justify-center bg-white p-6"
          onSubmit={handleSubmit}
        >
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="absolute top-1">
            <img className="w-150" src={logo} alt="TSE Logo" />
          </div>

          <div className="flex flex-col items-center mt-15">
            <h2 className="text-4xl font-bold text-gray-800 mb-15">
              TSE Meeting Room
            </h2>
            <p className="text-xl font-semibold text-gray-600 ">Sign in</p>

            <form className="mt-10 w-96">
              <label className="block text-gray-700 font-medium mb-4">
                TSE ID
              </label>
              <input
                type="text"
                className="w-full p-3.5 bg-[#EBEDF1] rounded-md  focus:outline-none"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label className="block text-gray-700 font-medium mt-8 mb-4">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3.5 bg-[#EBEDF1] rounded-md  focus:outline-none"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
            </form>

            <div className="mt-15 text-center">
              <p className="text-sm text-gray-600 mb-2">
                จองล่วงหน้าอย่างน้อย 1 วัน
              </p>
              <button className="w-30 bg-[#8A2A2B] text-white py-1.5 rounded-md text-lg font-semibold hover:bg-[#621d1e] cursor-pointer">
                Sign In
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
