import Image from "next/image";
import "./style.css";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";

interface VideoCard {
  image: any;
  title: string;
  duration: string;
  trainer: string;
  link: string;
  vClass: string;
}

const VideoCard = ({
  image,
  title,
  duration,
  trainer,
  link,
  vClass,
}: VideoCard) => {
  return (
    <>
      <div className={`videoCard ${vClass}`}>
        <Image src={image} alt="" />
        <div className="vCardContent">
          <h3>{title}</h3>
          <p>{trainer}</p>
          <h4>{duration}</h4>
          <button>
            <Link href={`/video/${link}`}>
              Watch Now{" "}
              <PiArrowRight
                style={{ display: "inline-block", margin: "0 0 0 1rem" }}
              />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
