import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <section className="section section--header jumbotron">
      <div className="container">
        <Fade left duration={1000} delay={800} distance="30px">
          <>
            <h1 className="header__text">
              {"Hi, my name is"}{" "}
              <span className="header__name">{"Chris Campos"}</span>
            </h1>
          </>
        </Fade>
        <br />
        <Fade bottom duration={1000} delay={2000} distance="30px">
          <>
            <h1 className="header__text">{"I'm a Full Stack Developer."}</h1>
          </>
        </Fade>
      </div>
    </section>
  );
}
