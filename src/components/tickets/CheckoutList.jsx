import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { getCheckouts, returnCheckout } from "../../data/checkoutData";

export const CheckoutList = () => {
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    getCheckouts().then(setCheckouts);
  }, []);

  const handleReturn = (id) => {
    returnCheckout(id).then(() => {
      getCheckouts().then(setCheckouts);
    });
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts</h4>
        <Link to="/materials/create">Add</Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material</th>
            <th>Patron</th>
            <th>Checkout Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((co) => (
            <tr key={`checkouts-${co.id}`}>
              <th scope="row">{co.id}</th>
              <td>{co.material.id}</td>
              <td>{co.patron.id}</td>
              <td>{co.checkoutDate}</td>
              <td>{co.returnDate ?? "Not Returned"}</td>{" "}
              <td>
                <Link to={`${co.id}`}>Details</Link>
              </td>
              <td>
                {co.returnDate === null && (
                  <button onClick={() => handleReturn(co.id)}>RETURN</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
