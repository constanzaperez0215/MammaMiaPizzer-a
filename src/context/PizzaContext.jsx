import { createContext, useEffect, useState } from "react"

export const PizzaContext = createContext()

const PizzaPovider = ({children}) => {
  const [pizzas, setPizzas] = useState([])

  const getData = async() =>{
    const res = await fetch('public/pizzas.json')
    const data = await res.json()
    const new_array = Object.values(data)
    const joinData = new_array.flatMap(pizzaList => pizzaList)
    const newData = joinData.map(datos => ({...datos, añadir:false}))
    setPizzas(data)
    console.log(newData)

  }

  useEffect(()=>{
    getData()
  },[])

    return (
    <PizzaContext.Provider value={{pizzas, setPizzas}}>
        {children}
    </PizzaContext.Provider>

  )
}

export default PizzaPovider