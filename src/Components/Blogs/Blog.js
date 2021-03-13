import React from "react";
import { Button, Card } from "react-bootstrap";
import { blogs } from "../../assets/Data";
const Blog = () => {
  return (
    <div className='d-flex justify-content-around flex-wrap ' style={{marginTop:'50px'}}>
      {blogs.map((el) => (
        <Card style={{width:'350px', height:'560px'}} key={el.id} className=" mt-3 ">
          <Card.Img variant="top" src={el.src} style={{width:'350px',height:'250px'}}/>
          <Card.Body>
            <Card.Title style={{ fontWeight:'bold',fontSize:'1.2em',}}>{el.title.toUpperCase()}</Card.Title>
            <Card.Text>
              {el.description}
            </Card.Text>
            <Button variant="success"> LIRE LA SUITE...</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
