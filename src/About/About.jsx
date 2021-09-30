import { Link } from "react-router-dom";
import Title from "../Title/Title";
import Fade from "react-reveal/Fade";
import { aboutData } from "../Data/Data";
import photo from "../images/me.jpeg";

const { paragraphOne, paragraphTwo } = aboutData;

export default function About() {
  return (
    <section className="section section--about">
      <Title title="About Me" />
      <div className="row">
        <div className=".d-sm-none .d-md-block col-md-1 col-xl-2"></div>

        <div className="col-12 col-md-5 col-xl-4">
          <Fade left duration={1000} delay={600} distance="30px">
            <img
              className="about__img"
              src={photo}
              alt="my face"
              rel="noopener noreferrer"
            />
          </Fade>
        </div>

        <div className="col-12 col-md-5 col-xl-4">
          <Fade right duration={1000} delay={1000} distance="30px">
            <div className="about__text">
              <p>{paragraphOne}</p>
              <p>{paragraphTwo}</p>
              <Link to="/resume" className="button ripple">
                Resume
              </Link>
            </div>
          </Fade>
        </div>

        <div className=".d-sm-none .d-md-block col-md-1 col-xl-2"></div>
      </div>
    </section>
  );
}
