import "./style.css";
import course from "@/assets/course.jpg";
import course2 from "@/assets/course2.jpg";
import VideoCard from "../../videoCard/VideoCard";
import { PiArrowRight } from "react-icons/pi";

const trendings = [
  {
    id: 1,
    image: course,
    title: "Node.js Training Course",
    duration: "3+ Hours",
    trainer: "Vandana Saxena",
    link: "nodejs-training",
  },
  {
    id: 2,
    image: course,
    title: "Node.js Training Course",
    duration: "3+ Hours",
    trainer: "Vandana Saxena",
    link: "nodejs-training",
  },
  {
    id: 3,
    image: course,
    title: "Node.js Training Course",
    duration: "3+ Hours",
    trainer: "Vandana Saxena",
    link: "nodejs-training",
  },
  {
    id: 4,
    image: course,
    title: "Node.js Training Course",
    duration: "3+ Hours",
    trainer: "Vandana Saxena",
    link: "nodejs-training",
  },
  // {
  //   id: 5,
  //   image: course,
  //   title: "Node.js Training Course",
  //   duration: "3+ Hours",
  //   trainer: "Vandana Saxena",
  //   link: "nodejs-training",
  // },
  // {
  //   id: 6,
  //   image: course,
  //   title: "Node.js Training Course",
  //   duration: "3+ Hours",
  //   trainer: "Vandana Saxena",
  //   link: "nodejs-training",
  // },
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
              return (
                <VideoCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  duration={item.duration}
                  trainer={item.trainer}
                  link={item.link}
                  vClass="vCard"
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="softSkills width100 flex alignCenter justifyCenter">
        <div className="softSkillsContainer width95 maxWidth">
          <div className="softSkillsHead flex alignCenter spaceBtw">
            <h2 className="marginBottom1">Soft Skills</h2>
            <p>
              Show All <PiArrowRight style={arrowIconStyling} />
            </p>
          </div>
          <div className="trendingTabs flex alignCenter justifyCenter gap1">
            {trendings.map((item) => {
              return (
                <VideoCard
                  key={item.id}
                  image={course2}
                  title={item.title}
                  duration={item.duration}
                  trainer={item.trainer}
                  link={item.link}
                  vClass="vCard"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeVideos;
