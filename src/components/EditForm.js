import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const EditForm = ({ theEmployee }) => {
  const { updateEmployee } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [name, SetName] = useState(employee.name);
  const [email, SetEmail] = useState(employee.email);
  const [address, SetAddress] = useState(employee.address);
  const [phone, SetPhone] = useState(employee.phone);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => SetName(e.target.value)}
          placeholder="Name"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Adress"
          name="address"
          value={address}
          onChange={(e) => SetAddress(e.target.value)}
          rows={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => SetPhone(e.target.value)}
          name="phone"
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Update Employee
      </Button>
    </Form>
  );
};

export default EditForm;
