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
  
          </p>
          <div> jamiejacob1988@gmail.com</div> 
          <div> +45 31869542</div>
        </Container>
        
       
      </div>
    </>
  );
}


export default Contact;
