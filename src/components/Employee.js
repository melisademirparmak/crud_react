import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext } from 'react';

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td className="row align-items-center">
        <buttton className="btn text-warning row" data-toggle="modal">
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
    </>
  );
};

export default Employee;
