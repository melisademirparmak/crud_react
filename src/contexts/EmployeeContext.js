import { createContext, useState } from 'react';

export const EmployeeContext = createContext();

const EmployeeContextPrivder = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Thomas Hardy',
      email: 'thomashardy@mail.com',
      address: '89 Chiaroscuro Rd, Portland, USA',
      phone: '(171) 555-2222',
    },
    {
      id: 2,
      name: 'Dominique Perrier',
      email: 'dominiqueperrier@mail.com',
      address: 'Obere Str. 57, Berlin, Germany',
      phone: '(313) 555-5735',
    },
    {
      id: 3,
      name: 'Maria Anders',
      email: 'mariaanders@mail.com',
      address: '25, rue Lauriston, Paris, France',
      phone: '(503) 555-9931',
    },
    {
      id: 4,
      name: 'Fran Wilson',
      email: 'franwilson@mail.com',
      address: 'C/ Araquil, 67, Madrid, Spain',
      phone: '(204) 619-5731',
    },
    {
      id: 5,
      name: 'Martin Blank',
      email: 'martinblank@mail.com',
      address: 'Via Monte Bianco 34, Turin, Italy',
      phone: '(480) 631-2097',
    },
  ]);

  return <EmployeeContext.Privder>{props.children}</EmployeeContext.Privder>;
};

export default EmployeeContext;
