import { useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"


const Pizza = () => {
  const { id } = useParams()
  console.log(id)
  const navigate = useNavigate()

  const volver = () => {
    navigate("/pizza/");
  };

  return (
    <>
      <Button className="btn btn-dark" onClick={volver} variant="primary">
        Volver
      </Button>
          </>
  )
}

export default Pizza