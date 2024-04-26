import { useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { PizzaContext } from "../context/PizzaContext"


const Pizza = () => {
  const {pizzas} = useContext(PizzaContext)
  const [detallePizza, setDetallePizza]= useState({})
  const { id } = useParams()
  console.log(detallePizza)
  const navigate = useNavigate()

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id)
    setDetallePizza(datosPizza || {})
  }
  useEffect(()=> {
    obtenerDatos()
  }, [pizzas])
  
  const volver = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div>
          <img className="imgDetalle" src={detallePizza.img} alt={detallePizza.name} />
        </div>
        <div>
          <h2>{detallePizza.name}</h2>
          <hr></hr>
          <p>{detallePizza.desc}</p>
          <h5>Ingredientes:</h5>
          <div>
            {detallePizza.ingredients?.map((elem, index) => (
              <p className="ingredientes" key={index}>
                <img
                  className="miniPizza"
                  src="https://png.pngtree.com/png-clipart/20221227/original/pngtree-delicious-pizza-slice-png-image_8811035.png"
                  alt="miniPizza"
                />{" "}
                {elem}
              </p>
            ))}
          </div>
          <p>Precio: ${detallePizza.price}</p>
        </div>
      </div>



      <Button className="btn btn-dark" onClick={volver} variant="primary">
        Volver
      </Button>
    </>
  )
}

export default Pizza