import { Button, Card,  } from 'react-bootstrap';
import { PizzaContext } from '../context/PizzaContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const {pizzas} = useContext(PizzaContext)

    const navigate = useNavigate()

    // const irVerMas = (()=>{
    //   navigate(`/pizza/${pizzas.id}`)
    // })

  return (
    <>
    {pizzas.map((pizza) =>{
      return(

        <Card key={pizza.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name.toUpperCase()}</Card.Title>
            <hr></hr>
            <Card.Text>
              {pizza.ingredients.map((elem, index)=>(
              <p key={index}><img className='miniPizza' src='https://png.pngtree.com/png-clipart/20221227/original/pngtree-delicious-pizza-slice-png-image_8811035.png' alt='miniPizza'/>{" "}{elem}</p>)
              )}
            </Card.Text>

            <Card.Footer className="precio">${pizza.price}</Card.Footer>
              <div className='btnsHome'>
            <Button onClick={()=> navigate(`/pizzas/${pizza.id}`)} variant="dark">Ver Más</Button>
            <Button variant="dark">Añadir</Button>
            </div>
          </Card.Body>
        </Card>
      )

    })}
    </>
  );
}

export default Cards;