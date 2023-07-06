import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navpage() {
  let data = useCart();
const[cartView,setCartView]=useState(false);
  const navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }

  return (
    <div>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-2">
            Food Villa
          </Navbar.Brand>
          <Nav className="me-auto mb-2">
            <Nav.Link className="active fs-5" as={Link} to="/">
              Home
            </Nav.Link>
            {localStorage.getItem("authToken") ? (
              <Nav.Link className="active fs-5" as={Link} to='/myorder'>My orders</Nav.Link>
            ) : (
              ""
            )}
          </Nav>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Button
                as={Link}
                to="/login"
                className="bg-white text-success mx-1"
              >
                Login
              </Button>
              <Button
                as={Link}
                to="/signup"
                className="bg-white text-success mx-1"
              >
                Signup
              </Button>
            </div>
          ) : (
            <div>
              <Button className="bg-white text-success mx-1" onClick={()=>setCartView(true)}>
                My Cart{" "}
                <Badge pill bg="danger">{data.length}</Badge>
        
              </Button>
              {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
              <Button
                className="bg-white text-danger mx-1"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
}
