import {
  faHeart,
  faSortDown,
  faSortUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCart } from "../../js/action/ProductAction";
import "./Panier.css";
const Panier = () => {
  const dispatch = useDispatch()
  const {count,shopProduct}= useSelector((state) => state.ShopReducer);
  const [colors, setColors] = useState(false);
  const [change, setChange] = useState(false);

  const [qte, setQte] = useState(1);
  const [total, setTotal] = useState(shopProduct.map(el=>el.price).reduce((a,b)=>a+b,0));
  const handelIncrement = (id) => {
    let prix= shopProduct.filter(el=>el.id===id).map(el=>el.price)[0]
    setQte(qte+1);
    setTotal(prix+total);
  };
  const handelDecrement = (id) => {
    let prix= shopProduct.filter(el=>el.id===id).map(el=>el.price)[0]
    if (qte > 0) {
      setQte(qte - 1);
    }
    setTotal(total-prix)
  };
  if(shopProduct.length===0){
    return <h1 style={{marginTop:'200px',marginLeft:'200px', color:'yellowgreen'}}>le panier est vide</h1>
  }

  return (
    <div>
      {/* {count > 0 ? ( */}
        <Card className="card">
        <Card.Header as="h5">PANIER</Card.Header>
      {shopProduct.map(product=>
        <Card.Body className="container">
          <Card.Img variant="left" src={product.src} style={{width:'200px',height:'200px'}} />
          <Card.Title style={{paddingTop:'50px'}}>{product.name}</Card.Title>
          <Card.Text style={{paddingTop:'50px'}}>{product.description}</Card.Text>
          <Card.Text style={{paddingTop:'50px'}}>{product.price.toFixed(3)} TND </Card.Text>
          <Card.Text>
            <Form.Label style={{ fontWeight: "blod", color: "darkcyan" }}>
              Quantite:
            </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              style={{ width: "60px", height: "50px" }}
              value={qte}
            />
            <Button
              variant="light"
              style={{
                marginLeft: "60px",
                marginTop: "-100px",
                height: "30px",
              }}
              onClick={()=>handelIncrement(product.id)}
            >
              <FontAwesomeIcon
                icon={faSortUp}
                style={{ marginBottom: "5px" }}
              />
            </Button>
            <Button
              variant="light"
              style={{
                marginLeft: "-35px",
                marginTop: "-50px",
                width: "35px",
                height: "28px",
              }}
              onClick={()=>handelDecrement(product.id)}
            >
              <FontAwesomeIcon
                icon={faSortDown}
                style={{ marginBottom: "26px" }}
              />
            </Button>
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ marginTop: "40px", cursor: "pointer", fontSize: "18PX" }}
              className={colors ? "green" : "black"}
              onClick={() => setColors(!colors)}
            />

            <FontAwesomeIcon
              icon={faTrash}
              style={{
                marginTop: "40px",
                marginLeft: "40px",
                cursor: "pointer",
                fontSize: "18PX",
              }}
            
              className={change ? "red" : "black"}
              onClick={() =>  dispatch(deleteCart(product.id))}
            />
          </Card.Text>
        </Card.Body>)}
        <Card.Footer className="text-muted">
          <h6>TOTAL:</h6>
          <Card.Text>{total}</Card.Text>
        </Card.Footer>
      </Card>
      <Link to="/">
        {" "}
        <Button variant="info" style={{ width: "200px", margin: "10px" }}>
          Continuer mes achats
        </Button>
      </Link>

      {/* ) : (
        alert("le panier est vide !")
      )} */}
    </div>
  );
};

export default Panier;
