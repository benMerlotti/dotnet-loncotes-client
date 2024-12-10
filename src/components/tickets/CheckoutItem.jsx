import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getMaterial } from "../../data/materialsData";
import { createCheckout } from "../../data/checkoutData";

export const CheckoutItem = () => {
  const [materials, setMaterials] = useState([]);
  const [patronId, setPatronId] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getMaterial(id).then(setMaterials);
  }, [id]);

  const material = materials[0];

  const materialId = material?.id;

  const submit = () => {
    const newCheckout = {
      materialId,
      patronId,
    };

    createCheckout(newCheckout).then(() => {
      navigate("/checkouts");
    });
  };

  return (
    <div className="container">
      <h4>Checkout Material</h4>
      {material ? (
        <div>
          <p>Material: {material.materialName}</p>
          <p>Type: {material.materialType?.name}</p>
        </div>
      ) : (
        <p>Loading material...</p>
      )}
      <Form>
        <FormGroup>
          <Label htmlFor="materialName">Input Patron Id</Label>
          <Input
            type="text"
            placeholder="PatronId"
            name="patronId"
            value={patronId}
            onChange={(e) => {
              setPatronId(e.target.value);
            }}
          />
        </FormGroup>
        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
};
