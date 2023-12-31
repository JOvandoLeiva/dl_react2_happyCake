import Form from 'react-bootstrap/Form';
import Nav from './NavBar';

const Formulary = () => {
  return (
    <>
    <Nav />
    <Form className='Form'>
          <h2 className='text-center p-3'>Cuentanos, ¿En que te podemos ayudar?</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="tunombre@correo.cl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <div className='text-center p-3'>
        <button className="btn btn-danger">Enviar</button>
        </div>
      </Form.Group>
    </Form>
    </>
  );
}

export default Formulary;