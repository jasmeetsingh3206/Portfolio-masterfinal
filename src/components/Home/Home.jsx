import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 12 }} className="heading">Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">I'M<strong className="main-name"> JASMEET</strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left", paddingTop: 20 }}>
                <Type />
              </div>
            </Col>

            <Col md={7} style={{ paddingBottom: 20, display: "flex", justifyContent:"center" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "480px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
