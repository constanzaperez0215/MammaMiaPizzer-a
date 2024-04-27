import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";


const Carrito = () => {
  const { carrito } = useContext(PizzaContext);


  return (
    <div>
      <h2>Detalle del pedido:</h2>
      <div className="containerCarrito">
        {carrito.map((elem, index) => (
          <div key={index}>
            <div>
              <img className="ingCarrito" src={elem.img} alt={elem.name} />
              <h5>{elem.name}</h5>
            </div>

            <div>
              <h6>${elem.price*elem.count}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrito;
