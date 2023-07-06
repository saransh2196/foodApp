import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatchCart,useCart } from "./ContextReducer";

export default function Cards(props) {
    let data=useCart();
    const priceRef=useRef();
    let dispatch=useDispatchCart();
    let options=props.options;
    let priceOptions=Object.keys(options)
    const[qty,setQty]=useState(1)
    const[size,setSize]=useState("")
 
    const handleAddToCart=async ()=>{
        let food=[]
        for(const item of data){
            if(item.id===props.foodItem._id){
                food= item;
                
                break;
            }
        }
        if (food!=[]){
            if(food.size === size){
                await dispatch({type:"UPDATE", id:props.foodItem._id,price:finalPrice,qty:qty})
                return
            }
            else if(food.size !== size){
                await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
                return
            }
            return
        }
        
        //    console.log(data)
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    }

    let finalPrice=qty*parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])

  return (
      <Card className="mt-3" style={{ width: "18rem", maxHeight: "450px" }}>
        <Card.Img variant="top" src={props.foodItem.img} style={{height:"200px",objectFit:"fill"}} />
        <Card.Body>
          <Card.Title>{props.foodItem.name}</Card.Title>
          <Card.Text></Card.Text>
          <Container className="w-100">
            <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded " ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </Container>
          <hr></hr>
          <Button className="btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>

  );
}
