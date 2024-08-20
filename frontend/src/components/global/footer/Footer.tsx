import Link from "next/link";
import "./style.css";
import {
  Mastercard,
  Visa,
  Paypal,
  Maestro,
  Unionpay,
} from "react-payment-logos/dist/flat";
const Footer = () => {
  return (
    <>
      <footer className="width100 flex alignCenter justifyCenter flexColumn">
        <section className="fContainer width95 maxWidth flex alignStart spaceBtw">
          <div className="fMenu">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/">Signup</Link>
              </li>
            </ul>
          </div>
          <div className="fMenu">
            <ul>
              <li>
                <Link href="/">Soft Skills</Link>
              </li>
              <li>
                <Link href="/">Technical</Link>
              </li>
              <li>
                <Link href="/">Behavioral</Link>
              </li>
              <li>
                <Link href="/">HR</Link>
              </li>
              <li>
                <Link href="/">DevOps</Link>
              </li>
            </ul>
          </div>
          <div className="fMenu">
            <ul>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Return Policy</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="fMenu">
            <ul>
              <li>
                <Link href="/">Youtube</Link>
              </li>
              <li>
                <Link href="/">Instagram</Link>
              </li>
              <li>
                <Link href="/">Facebook</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
              <li>
                <Link href="/">LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div className="fMenu">
            <h2>3a TV</h2>
          </div>
        </section>
        <section className="copyright width95 maxWidth flex alignCenter spaceBtw">
          <p>© Copyright 2024 | 3a Learning Solutions India Pvt. Ltd</p>
          <div className="fPayments flex alignCenter justifyCenter gap1">
            <Paypal />
            <Mastercard />
            <Visa />
            <Maestro />
            <Unionpay />
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
