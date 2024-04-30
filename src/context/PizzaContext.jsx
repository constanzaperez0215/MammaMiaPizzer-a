import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaPovider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([])

  const getData = async () => {
    try {
      const res = await fetch("public/pizzas.json");
      const data = await res.json();
      setPizzas(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Función que agrega las pizzas al carrito

  const add = ({ id, name , price, img }) => {
    const productoEncontrado = carrito.findIndex((p)=> p.id === id)
    const producto = { id, name , price, img, count: 1 }

    if(productoEncontrado >= 0){
      carrito[productoEncontrado].count++
      setCarrito([...carrito])
    }else{
      setCarrito([...carrito, producto])
    }
  }
  // Función que calcula el total
  const total = carrito.reduce((acumulador,{ count, price })=> acumulador + price*count, 0)

  // Funciones para agegar y quitar objetos desde el carrito
  const mas = (i) => {
    carrito[i].count++
    setCarrito([...carrito])
  }

  const menos = (i) => {
    const { count } = carrito[i]
    if (count === 1) {
      carrito.splice(i,1)
    } else {
      carrito[i].count--
    }
    setCarrito([...carrito])
  }

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, add, carrito, setCarrito, total, mas, menos }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaPovider;
