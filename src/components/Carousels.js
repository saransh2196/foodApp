import React from "react";
import { Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Carousels() {
  return (
    <div>
      <Carousel activeIndex={1} fade>
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
        <Carousel.Item id="carousel" interval={1000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/900x700/?burger"
            alt="First slide"
            style={{ filter: "brightness(30%" }}
          />
        </Carousel.Item>
        <Carousel.Item id="carousel" interval={1000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/900x700/?pizza"
            alt="Second slide"
            style={{ filter: "brightness(30%" }}
          />
        </Carousel.Item>
        <Carousel.Item id="carousel" interval={1000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/900x700/?momos"
            alt="Third slide"
            style={{ filter: "brightness(30%" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
