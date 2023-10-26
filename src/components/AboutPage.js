import { Col, Container, Image, Row } from "react-bootstrap";
import image from "../assets/dev-girl.png";
function AboutPage() {
  return (
    <>
      <div className="homepagebackground">
        <Container style={{ paddingTop: "120px" }}>
          <Row className="aboutmebg">
            <h2 className="headtext">About me</h2>
            <Col xs={7}>
              A little too much about me. Not a programming wiz and just winging
              it. <b>Google Certified Professional Cloud Architect & Cloud Developer</b>. Love to try out new stuff. Interact with clients and deliver
              their expectations. 
              <div style={{ paddingTop: "10px" }}>
                <h4>Skills</h4>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index + 1}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col>
              <Image src={image}></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
const skills = [
  "Javascript",
  "Typescript",
  "HTML/CSS",
  "Angular",
  "React",
  "Next.js",
  "Google Cloud",
  "Java",
  "Google Cloud",
  "SQL",
];
export default AboutPage;
