const _apiUrl = "https://localhost:5001/patrons"

export const getPatrons = () => {
    return fetch(_apiUrl).then((r) => r.json());
  };

  export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const deactivatePatron = (id) => {
    return fetch(`${_apiUrl}/deactivate?id=${id}`, { // Pass ID as a query parameter
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    }).then((res) => res.json());
  };
  