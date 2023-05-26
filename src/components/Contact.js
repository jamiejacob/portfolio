import { Container } from "react-bootstrap";

import Comment from "./Comment";

function Contact() {
 

  return (
    <>
      <div className="homepagebackground">
        <Container style={{ paddingTop: "120px", textAlign: "center" }}>
          <h2 className="headtext">Get in Touch</h2>
          <p>
            If you find me interesting and would love to know more about me
            please get in touch
            Also feel free to post notes on the below wall.
          </p>
         
        </Container>
        
        <Comment></Comment>
      </div>
    </>
  );
}


export default Contact;
