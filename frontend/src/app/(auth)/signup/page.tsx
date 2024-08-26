"use client";
import { PiArrowBendUpLeft } from "react-icons/pi";
import { useRouter } from "next/navigation";
import "./style.css";
import Link from "next/link";
import { useEffect } from "react";
import getCookie from "@/components/local/getCookie";
const Signup = () => {
  const router = useRouter();
  useEffect(() => {
    const cookieValue = getCookie("3aLogin");

    if (cookieValue) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <section className="signup width100 flex alignCenter justifyCenter">
        <div className="signupContainer width95 maxWidth flex alignCenter justifyCenter">
          <div className="signupForm">
            <h1>Welcome To 3a TV</h1>
            <form>
              <div className="sFTab width100 marginBottom1">
                <label>
                  Full Name<span>*</span>
                </label>
                <input
                  placeholder="ex. Harshit Kumar"
                  type="text"
                  name="fullName"
                  required
                />
              </div>
              <div className="sFTab width100 marginBottom1">
                <label>
                  Phone<span>*</span>
                </label>
                <input
                  placeholder="ex. 0000000000"
                  type="tel"
                  name="phone"
                  required
                />
              </div>
              <div className="sFTab width100 marginBottom1">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  placeholder="ex. example@gmail.com"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="sFTab marginBottom1">
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

                <p>Forget Password?</p>
              </div>

              <button className="marginBottom1">Signup</button>
              <p>
                Already Registered? <Link href="/login">Login</Link>
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

export default Signup;
