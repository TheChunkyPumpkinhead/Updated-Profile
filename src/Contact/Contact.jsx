import Fade from "react-reveal/Fade";
import Title from "../Title/Title";
import { socialData } from "../Data/Data";

export default function Contact() {
  const { networks } = socialData;
  return (
    <section className="section section--contact">
      <Title title="Contact" />

      <div className="container social__container">
        {networks.map((network) => {
          const { id, name, url } = network;
          return (
            <a
              className="social__links"
              key={id}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={name}
            >
              <i className={`bi bi-${name}`} />
            </a>
          );
        })}
      </div>

      <Fade bottom duration={1000} delay={800} distance="30px">
        <a
          href="mailto: chriscampos@remainobscure.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button ripple button__contact"
        >
          Let's Talk
        </a>
      </Fade>
    </section>
  );
}
