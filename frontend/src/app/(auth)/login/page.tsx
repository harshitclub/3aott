"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import { PiArrowBendUpLeft } from "react-icons/pi";
import Link from "next/link";
import getCookie from "@/components/local/getCookie";
const Login = () => {
  const router = useRouter();
  const [cred, setCred] = useState({
    email: "kundan.k@3alearningsolutions.com",
    password: "Kundan@123",
  });
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const setCookie = () => {
    document.cookie = `3aLogin=${true}; expires=${new Date(
      Date.now() + 24 * 60 * 60 * 1000
    ).toUTCString()}; path=/`;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(formData);
    if (formData.email === cred.email && formData.password === cred.password) {
      setCookie();
    }
    setFormData(initialFormData);
    location.href = "/";
  };

  useEffect(() => {
    const cookieValue = getCookie("3aLogin");

    if (cookieValue) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <section className="login width100 flex alignCenter justifyCenter">
        <div className="loginContainer width95 maxWidth flex alignCenter justifyCenter">
          <div className="loginForm">
            <h1>Login To 3a TV</h1>
            <form onSubmit={handleSubmit}>
              <div className="lFTab width100 marginBottom1">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  placeholder="ex. example@gmail.com"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email} // Controlled component approach
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
                  onChange={handleChange}
                  value={formData.password} // Controlled component approach
                  required
                  className="marginBottom05"
                />
                {/* <p style={{ textAlign: "left", color: "#dc2626" }}>
                  Password is required
                </p> */}
                <p>Forget Password?</p>
              </div>

              <button className="marginBottom1" type="submit">
                Login
              </button>
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
