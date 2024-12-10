import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";
import { deactivatePatron } from "../../data/patronsData";

export default function PatronsList() {
  const [patrons, setPatrons] = useState([]);

  useEffect(() => {
    getPatrons().then(setPatrons);
  }, []);

  const handleDeactivation = (p) => {
    deactivatePatron(p.id).then(() => {
      // Fetch all patrons again after deactivation
      getPatrons().then((data) => {
        setPatrons(data); // Update the patrons state with the new list
      });
    });
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
        <Link to="/patrons/create">Add</Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patrons.map((p) => (
            <tr key={`patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>
                {p.firstName} {p.lastName}
              </td>
              <td>{p.email}</td>
              <td>{p.address}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
              <td>
                {console.log(p)}
                {p.isActive && (
                  <button onClick={() => handleDeactivation(p)}>
                    DEACTIVATE
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
