import { Button, Card } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const { pizzas, add } = useContext(PizzaContext);

  const navigate = useNavigate();

  return (
    <>
      {pizzas.map((pizza) => (
          <Card key={pizza.id} style={{ width: "18rem" }}>
            <div>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name.toUpperCase()}</Card.Title>
              <hr></hr>
              <Card.Text>
                <h6>Ingredientes:</h6>
                {pizza.ingredients.map((elem, index) => (
                  <p className="ingredientes" key={index}>
                    <img
                      className="miniPizza"
                      src="https://png.pngtree.com/png-clipart/20221227/original/pngtree-delicious-pizza-slice-png-image_8811035.png"
                      alt="miniPizza"
                    />{" "}
                    {elem}
                  </p>
                ))}
              </Card.Text>

              <Card.Footer className="precioCard text-danger">
                ${pizza.price}
              </Card.Footer>
              <div className="btnsHome">
                <Button
                  onClick={() => navigate(`/pizza/${pizza.id}`)}
                  variant="dark"
                >
                  Ver Más
                </Button>

                <Button variant="danger" onClick={() => add(pizza)}>
                  Añadir
                </Button>
              </div>
            </Card.Body>
            </div>
          </Card>
        )
      )}
    </>
  );
};

export default Cards;
