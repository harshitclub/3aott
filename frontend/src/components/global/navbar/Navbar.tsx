"use client";
import { useRouter } from "next/navigation";
import "./style.css";
import { PiUserCircle } from "react-icons/pi";
import Link from "next/link";
import getCookie from "@/components/local/getCookie";
const Navbar = () => {
  const router = useRouter();
  function deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    location.reload();
  }
  const cookieValue = getCookie("3aLogin");

  return (
    <>
      {/* <header>this is header</header> */}
      <nav className="flex alignCenter justifyCenter width100">
        <div className="navContainer flex spaceBtw alignCenter width95 maxWidth">
          <div className="logo">
            <h1>3a TV</h1>
          </div>
          <ul className="menu flex alignCenter justifyCenter gap2">
            <li>
              <Link href="/">Home</Link>
            </li>
            {cookieValue ? (
              <>
                <li onClick={() => deleteCookie("3aLogin")}>Logout</li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
          <div className="userMenu">
            <PiUserCircle
              className="navUserIcon"
              style={{ fontSize: "1.7rem" }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
