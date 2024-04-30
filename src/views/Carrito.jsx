import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Col, ListGroup, Row, Tab, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { carrito, total, mas, menos } = useContext(PizzaContext);
  const navigate = useNavigate()

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

                  <div className="compra">
                    <h5>${elem.price * elem.count}</h5>

                  <button className="btn btn-danger" onClick={() => menos(index)}>
                    -
                  </button>
                  <p>{elem.count}</p>
                  <button className="btn btn-success" onClick={() => mas(index)}>
                    +
                  </button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <ListGroup className="totalCarrito">
              <h4>Total: ${total}</h4>
              <button className="btn btn-primary">Ir a pagar</button>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
      <Button className="btn btnVolver btn-dark" onClick={()=>navigate("/")} variant="primary">
        Volver
      </Button>
    </>
  );
};

export default Carrito;
