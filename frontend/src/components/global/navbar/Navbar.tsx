import "./style.css";
import { PiUserCircle } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const Navbar = () => {
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
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
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
