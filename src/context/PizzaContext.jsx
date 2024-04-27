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

  console.log(carrito)


  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, add, carrito, setCarrito }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaPovider;
