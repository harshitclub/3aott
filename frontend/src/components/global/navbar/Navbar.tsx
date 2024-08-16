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
              <a>Home</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Signup</a>
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
