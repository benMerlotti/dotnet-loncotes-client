import { useState } from "react";
import { getAvailableMaterials } from "../../data/materialsData";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "reactstrap";

export const Browse = () => {
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAvailableMaterials().then(setMaterials);
  }, []);

  const handleCheckout = (id) => {
    navigate(`/checkout-item/${id}`);
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
        <Link to="/materials/create">Add</Link>
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
                  <td>
                    <button onClick={() => handleCheckout(m.id)}>
                      CHECKOUT
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </div>
  );
};
