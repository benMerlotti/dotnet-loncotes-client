import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPatron } from "../../data/patronsData";
import { Table } from "reactstrap";

export default function PatronDetails() {
  const [patron, setPatron] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getPatron(id).then(setPatron);
  }, []);

  return (
    <div className="container">
      <h2>
        {patron?.firstName} {patron?.lastName}
      </h2>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>{patron?.email}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{patron?.address}</td>
          </tr>
          <tr>
            <th scope="row">Late Fees</th>
            <td>
              {patron && patron.checkouts && patron.checkouts.length > 0
                ? patron.checkouts.reduce((total, co) => {
                    return total + co.lateFee;
                  }, 0)
                : 0}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
