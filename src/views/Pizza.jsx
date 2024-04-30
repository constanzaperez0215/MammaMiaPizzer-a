import { useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { PizzaContext } from "../context/PizzaContext"


const Pizza = () => {
  const {pizzas, add} = useContext(PizzaContext)
  const [detallePizza, setDetallePizza]= useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id)
    setDetallePizza(datosPizza || {})
  }
  useEffect(()=> {
    obtenerDatos()
  }, [pizzas])

  return (
    <>
      <div className="containerPizza" style={{ width: "95%" }}>
        <div>
          <img className="imgDetalle" src={detallePizza.img} alt={detallePizza.name} />
        </div>
        <div className="bodyPizza">
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
          <hr></hr>
          <div className="footerPizza">
            <p className="precioPizza">Precio: ${detallePizza.price}</p>
            <Button variant="danger" onClick={() => add(detallePizza)}>
                  Añadir
                </Button>
          </div>
        </div>
      </div>



      <Button className="btn btnVolver btn-dark" onClick={()=>navigate("/")} variant="primary">
        Volver
      </Button>

    </>
  )
}

export default Pizza