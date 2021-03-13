import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../js/action/ProductAction";

function FilterProducts({ search }) {
  console.log(search);
  const products = useSelector((state) => state.Reducer.products);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="d-flex justify-content-around flex-wrap">
        {products
          .slice(0, 6)
          .filter((product) =>
            product.name.toUpperCase().includes(search.toUpperCase())
          )
          .map((product) => (
            <Card
              style={{ width: "330px" }}
              key={product.id}
              className=" mt-3 align-items-center"
            >
              <Card.Img
                variant="top"
                src={product.src}
                style={{ width: "250px", height: "300px" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {product.price.toFixed(3)} TND
                </small>
                <Link to={`/description/${product.name}`}>
                  {" "}
                  <Button variant="info" style={{ marginLeft: "8px" }}>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </Link>
                <Button
                  variant="success"
                  style={{ marginLeft: "8px" }}
                  onClick={() => dispatch(addCart(product))}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
              </Card.Footer>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default FilterProducts;
