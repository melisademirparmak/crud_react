import { Form, Button } from 'react-bootstrap';

const AddForm = () => {
  <Form>
    <Form.Group>
      <Form.Control type="text" placeholder="Name" required />
    </Form.Group>
    <Form.Group>
      <Form.Control type="email" placeholder="Email" required />
    </Form.Group>
    <Form.Group>
      <Form.Control as="textarea" placeholder="Adress" rows={3} />
    </Form.Group>
    <Form.Group>
      <Form.Control type="text" placeholder="Phone" />
    </Form.Group>

    <Button variant="success" type="submit" block>
      Add New Employee
    </Button>
  </Form>;
};

export default AddForm;
