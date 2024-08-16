import Image from "next/image";
import "./style.css";

const VideoCard = ({ image }: { image: any }) => {
  return (
    <>
      <div className="videoCard">
        <Image src={image} alt="" />
      </div>
    </>
  );
};

export default VideoCard;
