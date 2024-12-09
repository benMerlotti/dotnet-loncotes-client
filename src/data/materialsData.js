const _apiUrl = "/api/materials";

export const getMaterials = () => {
  return fetch('https://localhost:5001/materials').then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`https://localhost:5001/materials/${id}`).then((r) => r.json());
};

export const createMaterial = (material) => {
  return fetch('https://localhost:5001/materials', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};
