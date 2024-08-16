"use client";
import { useState } from "react";
import "./style.css";
import { PiArrowBendUpLeft } from "react-icons/pi";
import Link from "next/link";
const Login = () => {
  const [cred, setCred] = useState({
    email: "kundan.k@3alearningsolutions.com",
    password: "Kundan@123",
  });
  return (
    <>
      <section className="login width100 flex alignCenter justifyCenter">
        <div className="loginContainer width95 maxWidth flex alignCenter justifyCenter">
          <div className="loginForm">
            <h1>Login To 3a TV</h1>
            <form>
              <div className="lFTab width100 marginBottom1">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  placeholder="ex. example@gmail.com"
                  type="email"
                  name="email"
                  required
                />
                {/* <p style={{ textAlign: "left", color: "#dc2626" }}>
                  Email is required
                </p> */}
              </div>
              <div className="lFTab marginBottom1">
                <label>
                  Password<span>*</span>
                </label>
                <input
                  placeholder="********"
                  type="password"
                  name="password"
                  required
                  className="marginBottom05"
                />
                {/* <p style={{ textAlign: "left", color: "#dc2626" }}>
                  Password is required
                </p> */}
                <p>Forget Password?</p>
              </div>

              <button className="marginBottom1">Login</button>
              <p>
                New to 3a TV? <Link href="/signup">Signup</Link>
              </p>
              <p className="borderBottomNone">
                <Link href="/">
                  <PiArrowBendUpLeft
                    style={{
                      display: "inline-block",
                      margin: "-0.18rem 0.5rem 0 0",
                    }}
                  />
                  Return To Home
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
