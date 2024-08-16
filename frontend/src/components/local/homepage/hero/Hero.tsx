import Image from "next/image";
import "./style.css";
import nodejs from "@/assets/node.png";
const Hero = () => {
  return (
    <>
      <section className="hero width100 flex alignCenter justifyCenter">
        <div className="heroContainer width100 ">
          <div className="heroImage width100">
            <Image src={nodejs} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
