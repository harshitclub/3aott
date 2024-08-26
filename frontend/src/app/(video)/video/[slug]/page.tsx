import "./style.css";

const Video = () => {
  return (
    <>
      <section className="videoContainer flex alignCenter justifyCenter flexColumn width100 ">
        <div className="videoPlayer width95 maxWidth">
          <video controls>
            <source
              src="https://d9s5vnsqywfnx.cloudfront.net/posh/POSH%20LAW%20VIDEO%20ENGLISH.01.mp4"
              type="video/mp4"
            />{" "}
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default Video;
