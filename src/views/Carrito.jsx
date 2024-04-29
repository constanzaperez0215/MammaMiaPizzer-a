import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const Carrito = () => {
  const { carrito } = useContext(PizzaContext);


  return (
    <>
    <div className="carrito">
      <h2>Detalle del pedido:</h2>
    
    </div>

<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
<Row className="list">
  <Col sm={4} style={{ width: "60rem" }}>
    <ListGroup >
      {carrito.map((elem, index) => (
          <ListGroup.Item action className="especificaciones" key={index}>
            <div className="imgName">
              <img className="imgCarrito" src={elem.img} alt={elem.name} />
              <h5>{elem.name}</h5>
            </div>

            <div>
              <h6>${elem.price*elem.count}</h6>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  </Col>
</Row>
</Tab.Container>
</>
  );
};

export default Carrito;
