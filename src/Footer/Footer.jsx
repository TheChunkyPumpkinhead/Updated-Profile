export default function Footer() {
  return (
    <section className="section section--footer">
      <div className="footer__text">
        © {new Date().getFullYear()} - developed by{" "}
        <a
          className="footer__underline"
          href="https://github.com/TheChunkyPumpkinhead"
          rel="noopener noreferrer"
          target="_blank"
        >
          Chris Campos
        </a>
      </div>
    </section>
  );
}
