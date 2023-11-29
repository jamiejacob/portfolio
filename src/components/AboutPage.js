import { Col, Container, Image, Row } from "react-bootstrap";
import image from "../assets/dev-girl.png";
function AboutPage() {
  return (
    <>
      <div className="homepagebackground">
        <Container style={{ paddingTop: "20px" }}>
          <Row className="aboutmebg ">
            <h2 className="headtext">About me</h2>
            <Col xs={12} md={6}>
              A full-stack developer with a relentless drive for continuous
              learning and improvement. I believe in the power of staying
              curious. My journey in the tech world is not just about solving
              problems but embracing the challenges that come with it. The tech
              landscape evolves, and so do I
              <div style={{ paddingTop: "10px" }}>
                <h4>Skills</h4>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index + 1}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={6} className="d-none d-lg-block">
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
  "Tailwind CSS",
  "Google Cloud Professional Architect",
  "Java",
  "Google Cloud Professional Developer",
  "SQL",
  " and many more ...",
];
export default AboutPage;
