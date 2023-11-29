import { Col, Container, Row, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import image from "../assets/homepage.png";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomePage() {
  return (
    <>
     
        <Container style={{ paddingTop: "120px" }}>
          <Row>
            <Col md={7}>
              <h2 className="headtext">
                Hello <span>👋</span>
              </h2>
              <h2>I'm Jamie</h2>
              <Typewriter
                options={{
                  strings: [
                    "Developer",
                    "Full stack Developer",
                    "Front end Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
              <div style={{ paddingTop: "50px" }}>
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/jamie-jacob-412795114/','_blank')}
                  className="socialmediabtn"
                >
                  <FaLinkedinIn className="icon"></FaLinkedinIn>
                </button>
                <button
                  onClick={() => window.open('https://github.com/jamiejacob?tab=repositories')}
                  className="socialmediabtn"
                >
                  <AiFillGithub className="icon"></AiFillGithub>
                </button>
                <button
                  onClick={() => window.open('https://www.instagram.com/jamiejacob1988','_blank')}
                  className="socialmediabtn"
                >
                  <AiFillInstagram className="icon"></AiFillInstagram>
                </button>
              </div>
            </Col>
            <Col md={5}>
              <Image src={image} className="developerimage"></Image>
            </Col>
          </Row>
        </Container>
     
    </>
  );
}

export default HomePage;
