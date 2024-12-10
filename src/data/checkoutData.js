const _apiUrl = "https://localhost:5001";

export const getCheckouts = () => {
    return fetch(`${_apiUrl}/checkouts`).then((r) => r.json());
  };

  export const returnCheckout = (id) => {
    return fetch(`${_apiUrl}/return?id=${id}`, { // Pass ID as a query parameter
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    }).then((res) => res.json());
  };

  export const createCheckout = (checkout) => {
    return fetch(`${_apiUrl}/checkout`,  {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checkout),
    }).then((res) => res.json());
  };

  export const getOverdue = () => {
    return fetch(`${_apiUrl}/checkouts/overdue`).then((r) => r.json());
  };