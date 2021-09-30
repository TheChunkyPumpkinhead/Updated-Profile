import Fade from "react-reveal/Fade";

export default function Title({ title }) {
  return (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="section-title">{title}</h2>
    </Fade>
  );
}
