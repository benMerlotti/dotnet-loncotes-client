const _apiUrl = "https://localhost:5001";

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

export const removeMaterial = (id) => {
  return fetch(`${_apiUrl}/materials/remove?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" }
  })
}

export const getAvailableMaterials = () => {
  return fetch('https://localhost:5001/materials/available').then((r) => r.json());
};
