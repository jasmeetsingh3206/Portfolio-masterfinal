import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {user} from "../../Assets/ResumeData";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About<span className="purple"> ME! </span>
            </h1>
            <p className="home-about-body">
              I’m a professional <span className="purple"> Full-stack Developer and Programmer </span>, experienced in a vast range of technologies in Frontend, Backend, Databases, Programming languages, etc. <br /><br />

              I enjoy solving complex problems and building application that solves <span className="purple">real-world problems</span> and learning a new technology is always exciting for me.<br /><br />

              Apart from programming, I like to run in the park on a nice evening, as it refreshes my mind and brings more creative ideas.<br /><br />

              In my journey of Programming, I go by the codename:  <span className="purple"> jasmeetsingh3206</span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3><i>Find me on</i></h3>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={user.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={user.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={user.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={user.socials.insta}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
