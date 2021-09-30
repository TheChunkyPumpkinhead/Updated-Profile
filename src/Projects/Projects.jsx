import Title from "../Title/Title";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { projectsData } from "../Data/Data";

export default function Projects() {
  return (
    <section className="section section--projects">
      <div className="container">
        <Title title="Projects" />
        {projectsData.map((project) => {
          const { title, info, info2, info3, img, repo, id } = project;

          return (
            <div class="projects__container">
              <div className="row" key={id}>
                <div className=".d-none .d-xl-block col-xl-1"></div>
                <div className="col-12 col-md-5 col-xl-4">
                  <Fade left duration={1000} delay={500} distance="30px">
                    <h3 className="projects__title">{title}</h3>
                    <div className="projects__text">
                      <p>{info}</p>
                      <p>{info2}</p>
                      <p>{info3}</p>
                    </div>
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      Source Code
                    </a>
                  </Fade>
                </div>

                <div className="col-12 col-md-7 col-xl-6">
                  <Fade right duration={1000} delay={1000} distance="30px">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                      }}
                    >
                      <img
                        alt={title}
                        filename={img}
                        src={img}
                        rel="noopener noreferrer"
                        className="projects__image"
                      />
                    </Tilt>
                  </Fade>
                </div>
                <div className=".d-none .d-xl-block col-xl-1"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
