import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';



const NavBar = () => {
  const { total} = useContext(PizzaContext)
  const setActiveClass=({isActive}) => (isActive ? "active" : "menu" )

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
      <NavLink to="/" className={setActiveClass}><img className='imgNav' src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cartoon-slice-of-pizza-clipart-vector-png-image_12236918.png" alt='Logo pizza'/> Pizzería Mamma Mía</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/" className={setActiveClass}>Home</NavLink>
          {"--"}
          <NavLink to="/carrito" className={setActiveClass}>${total}</NavLink>
          <NavLink to="/carrito" className={setActiveClass}><img className='iconCarrito'  src='https://cdn-icons-png.flaticon.com/512/8146/8146003.png' alt='carrito de compras'/></NavLink>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}


export default NavBar