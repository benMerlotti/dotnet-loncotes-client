import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getOverdue } from "../../data/checkoutData";

export default function CheckoutOverdue() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getOverdue().then(setMaterials);
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map(
            (m) =>
              m.outOfCirculationSince === null && (
                <tr key={`materials-${m.id}`}>
                  <th scope="row">{m.id}</th>
                  <td>{m.materialName}</td>
                  <td>{m.materialType.name}</td>
                  <td>{m.genre.name}</td>
                  <td>
                    <Link to={`${m.id}`}>Details</Link>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </div>
  );
}
