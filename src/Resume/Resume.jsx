import { Link } from "react-router-dom";
import Title from "../Title/Title";

export default function Resume() {
  return (
    <section className="section-resume">
      <div className="container">
        <Title title="Chris Campos" />
        <div className="row">
          <h3 className="col-12 col-md-3 mt-4">Summary</h3>
          <p className="col-12 col-md-9">
            Full Stack Web Developer proficient in JavaScript, React, Node.js,
            and PostgreSQL bringing in seven years of experience in hospitality
            and healthcare administration. Honed aptitude in management and
            communication. Committed to developing high quality software and
            satisfactory customer service.
          </p>
        </div>
        <hr />
        <div className="row">
          <h3 className="col-12 col-md-3">Technical Skills</h3>
          <div className="col-12 col-md-9">
            <p>
              Front End: JavaScript ES6, React, React Hooks, React Router,
              HTML5, CSS3, Bootstrap
            </p>
            <p>Back End: Node.js, Express.js, Knex.js, PostgreSQL</p>
            <p>
              Additional Tools & Skills: Git, Github, Mocha, Chai, Unit testing,
              Algorithms, Data structures
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <h3 className="col-12 col-md-3">Experience</h3>
          <div className="col-12 col-md-9">
            <h5> Assistant Grocery Manager </h5>
            <div className="experience-container mb-2">
              <p> Whole Foods | 02/2017 – 07/2020 </p>
              <p>
                - Developed and maintained a substantive personal customer base
                through exceptional customer service and product knowledge.
              </p>
              <p>
                - Consistently exceeded grocery team goals by engaging and
                educating employees and customers on Whole Foods products.
              </p>
              <p>Created scheduling for 3 supervisors and 40 employees.</p>
              <p>
                Led candidates through a six-stage process, from preliminary
                phone screens to client interviews, to negotiating final offers.
              </p>
            </div>
            <h5> Lifeguard Supervisor </h5>
            <div className="experience-container">
              <p> Disney Aulani | 06/2014 – 09/2016</p>
              <p>
                - Managed a safe and secure 8200 sq ft pool by enforcing rules,
                policies and procedures.
              </p>
              <p>
                - Provided excellent customer service to 200+ pool patrons daily
                by exemplifying a positive attitude and meeting their needs.
              </p>
              <p>
                - IParticipated in training and helping others obtain Water
                Safety Certifications
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <h3 className="col-12 col-md-3">Education</h3>
          <div className="col-12 col-md-9">
            <h5>Software Engineering Certificate, Thinkful</h5>
            <p>Thinkful | Online | June 2021 </p>
            <p>
              A rigorous 20-week program on building dynamic web applications.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="resume-button btn btn-dark btn-lg d-flex justify-content-center"
        >
          Back
        </Link>
      </div>
    </section>
  );
}
