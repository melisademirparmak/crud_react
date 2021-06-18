import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const { name, email, address, phone } = newEmployee;
  const onInputChange = (event) => {
    setNewEmployee({ ...newEmployee, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmployee(name, email, address, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => onInputChange(event)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => onInputChange(event)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Adress"
          name="address"
          value={address}
          onChange={(event) => onInputChange(event)}
          rows={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(event) => onInputChange(event)}
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
