import React from "react";
import { Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function () {
  return (
    <div>
      <Carousel fade>
        <Carousel.Caption>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ zIndex: "10" }}
            />
            <Button style={{ zIndex: "10" }} variant="outline-success">
              Search
            </Button>
          </Form>
        </Carousel.Caption>
        <Carousel.Item id="carousel">
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
            style={{ filter: "brightness(30%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
            style={{ filter: "brightness(30%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
            style={{ filter: "brightness(30%" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
