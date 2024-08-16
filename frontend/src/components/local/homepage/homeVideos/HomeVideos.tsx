import "./style.css";
import course from "@/assets/course.jpg";
import course2 from "@/assets/course2.jpg";
import VideoCard from "../../videoCard/VideoCard";
import { PiArrowRight } from "react-icons/pi";

const trendings = [
  {
    id: 1,
    image: course,
  },
  {
    id: 2,
    image: course,
  },
  {
    id: 3,
    image: course,
  },
  {
    id: 4,
    image: course,
  },
  {
    id: 5,
    image: course,
  },
  {
    id: 6,
    image: course,
  },
];

const arrowIconStyling = {
  display: "inline-block",
  margin: "-0.18rem 0 0 1rem",
};

const HomeVideos = () => {
  return (
    <>
      <section className="trendings width100 flex alignCenter justifyCenter">
        <div className="trendingContainer width95 maxWidth">
          <div className="trendingHead flex alignCenter spaceBtw">
            <h2>Latest Release</h2>
            <p>
              Show All <PiArrowRight style={arrowIconStyling} />
            </p>
          </div>
          <div className="trendingTabs flex alignCenter justifyCenter gap1">
            {trendings.map((item) => {
              return <VideoCard key={item.id} image={item.image} />;
            })}
          </div>
        </div>
      </section>
      <section className="softSkills width100 flex alignCenter justifyCenter">
        <div className="softSkillsContainer width95 maxWidth">
          <div className="softSkillsHead flex alignCenter spaceBtw">
            <h2>Soft Skills</h2>
            <p>
              Show All <PiArrowRight style={arrowIconStyling} />
            </p>
          </div>
          <div className="trendingTabs flex alignCenter justifyCenter gap1">
            {trendings.map((item) => {
              return <VideoCard key={item.id} image={course2} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeVideos;
