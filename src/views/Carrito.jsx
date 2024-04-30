import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";

const Carrito = () => {
  const { carrito, total, mas, menos } = useContext(PizzaContext);

  return (
    <>
      <div className="carrito">
        <h2>Detalle del pedido:</h2>
      </div>

      <Tab.Container id="list-group-tabs-example">
        <Row className="list">
          <Col sm={4} style={{ width: "60rem" }}>
            <ListGroup>
              {carrito.map((elem, index) => (
                <ListGroup.Item action className="especificaciones" key={index}>
                  <div className="imgName">
                    <img
                      className="imgCarrito"
                      src={elem.img}
                      alt={elem.name}
                    />
                    <h5>{elem.name.toUpperCase()}</h5>
                  </div>

                  <div>
                    <h6>${elem.price * elem.count}</h6>
                  </div>

                  <button className="btn btn-danger" onClick={() => menos(index)}>
                    -
                  </button>
                  <p>{elem.count}</p>
                  <button className="btn btn-success" onClick={() => mas(index)}>
                    +
                  </button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <ListGroup className="totalCarrito">
              <h4>Total: ${total}</h4>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Carrito;
