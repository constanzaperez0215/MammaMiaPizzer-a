import Cards from "../views/Cards"

const Home = () => {

  return (
    <>
    <div className="imgBackground">
      <div className="hero">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>
      </div>
    </div>

    <div className="pizzaCards ">
      <Cards />
    </div>

    </>
  )
}

export default Home