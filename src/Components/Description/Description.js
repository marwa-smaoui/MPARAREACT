import {
  faShoppingCart,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Button, Card, Figure, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../js/action/ProductAction";
import "./Description.css";

const Description = ({ match }) => {
  const products = useSelector((state) => state.Reducer.products);
  const [qte, setQte] = useState(1);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(
    products
      .filter((el) => el.name === match.params.name)
      .map((el) => el.price)[0]
  );

  const handelIncrement = () => {
    let prix= products
    .filter((el) => el.name === match.params.name)
    .map((el) => el.price)[0]
    setQte(qte+1);
    setTotal(prix+total);
  };
  const handelDecrement = () => {
    let prix= products
    .filter((el) => el.name === match.params.name)
    .map((el) => el.price)[0]
    if (qte > 0) {
      setQte(qte - 1);
    }
    setTotal(total-prix)
  };
  console.log(total)
  console.log(qte)
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="box1">
        {products
          .filter((el) => el.name === match.params.name)
          .map((el) => (
            <Figure>
              <div style={{ border: "0.5px solid rgb(223, 217, 217)" }}>
                <Figure.Image
                  width={400}
                  height={400}
                  alt="image"
                  src={el.src}
                  className="image"
                />
              </div>
              <div
                style={{
                  border: "0.5px solid rgb(223, 217, 217)",
                  width: "30%",
                  marginTop: "10px",
                }}
              >
                <Figure.Caption>
                  <Figure.Image
                    width={120}
                    height={120}
                    alt="image"
                    src={el.src}
                    className="image"
                  />
                </Figure.Caption>
              </div>
            </Figure>
          ))}
      </div>
      <div style={{ marginLeft: "20px" }}>
        {products
          .filter((el) => el.name === match.params.name)
          .map((el) => (
            <Card style={{ width: "600px", marginTop: "10px" }} key={el.id}>
              <Card.Body style={{ marginTop: "40px", marginLeft: "18%" }}>
                <Card.Title>{el.name}</Card.Title>
                <Form.Label
                  style={{
                    marginTop: "40px",
                    fontWeight: "blod",
                    color: "darkcyan",
                  }}
                >
                  Description:
                </Form.Label>
                <Card.Text>{el.description}</Card.Text>
                <Form.Label
                  style={{
                    marginTop: "10px",
                    fontWeight: "blod",
                    color: "darkcyan",
                  }}
                >
                  Prix:
                </Form.Label>
                <Card.Text style={{ fontSize: "large" }}>
                  {total.toFixed(3)} TND
                </Card.Text>

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
                    onClick={handelIncrement}
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
                    onClick={handelDecrement}
                  >
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ marginBottom: "26px" }}
                    />
                  </Button>
                  <Button
                    variant="success"
                    style={{ marginLeft: "20px", marginTop: "-75px" }}
                    onClick={() => dispatch(addCart({products}))}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Button>
                </Card.Text>
                <Card.Text
                  style={{
                    width: "100px",
                    height: "30px",
                    color: "white",
                    paddingLeft: "20px",
                  }}
                  className={el.qte < qte ? "non" : "oui"}
                >
                  EnStock
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Description;
