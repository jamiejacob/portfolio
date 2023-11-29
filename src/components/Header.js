import { Nav, Navbar} from "react-bootstrap";
import { AiOutlineQrcode} from "react-icons/ai"

function Header(){
return(
<>
<Navbar className="gap-3 px-3"  expand="lg">
<Navbar.Brand style ={{fontSize:'50px'}}><AiOutlineQrcode></AiOutlineQrcode></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />

<Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end flex-grow-1 px-5 text-xs">
     
        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
        <Nav.Link href="/about" className="nav-link">About</Nav.Link>
        <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
</Navbar>
</>
)
}

export default Header