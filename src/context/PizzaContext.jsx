import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaPovider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("public/pizzas.json");
      const data = await res.json();
      const newData = data.map((datos) => ({ ...datos, añadir: false }));
      setPizzas(newData);

      console.log(newData);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaPovider;
