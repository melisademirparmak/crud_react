import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import EditForm from './EditForm';

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td className="row align-items-center">
        <buttton
          onClick={handleShow}
          className="btn text-warning row"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </buttton>
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="btn text-danger"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
