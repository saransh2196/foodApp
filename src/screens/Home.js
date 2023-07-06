import React, { useEffect, useState } from "react";
import Navpage from "../components/Navpage";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousels from "../components/Carousels";
import { Button, Card, Carousel, Form } from "react-bootstrap";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch]=useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navpage />
      </div>
      <div>
        <Carousel activeIndex={1} fade>
          <Carousel.Caption style={{ zIndex: "10" }}>
            {/* <Form className="d-flex justify-content-center">
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
            </Form> */}
            <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
            </div>
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
      <div className="container">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />

                  {foodItem.length > 0 ? (
                    <div className="d-flex flex-wrap col-12 col-md-6col-lg-3 ">
                      {foodItem
                        .filter(
                          (item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) 
                        ) 
                        .map((filterItems) => {
                          return (
                            <div key={filterItems._id} className="p-3 ">
                              <Cards
                              foodItem={filterItems}
                                options={filterItems.options[0]}
                              />
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
