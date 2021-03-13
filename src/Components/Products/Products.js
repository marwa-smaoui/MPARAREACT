import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { products } from "../../assets/Data";
import { addCart } from "../../js/action/ProductAction";

const Products = ({search}) => {
  const dispatch = useDispatch();

  return (
    <div
      className="d-flex justify-content-around flex-wrap"
      style={{ marginTop: "100px" }}
    >
      {products
      .filter((product) =>
      product.name.toUpperCase().includes(search.toUpperCase())
    )
    .map((el) => (
        <Card style={{ width: "350px" }} key={el.id} className=" mt-3 ">
          <Card.Img
            variant="top"
            src={el.src}
            style={{ width: "300px", height: "300px" }}
          />
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>{el.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{el.price.toFixed(3)} TND </small>
            <Link to={`/description/${el.name}`}>
              <Button variant="info" style={{ marginLeft: "8px" }}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Link>
            <Button
              variant="success"
              style={{ marginLeft: "8px" }}
              onClick={() => dispatch(addCart(el))}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default Products;
