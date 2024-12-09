const _apiUrl = "https://localhost:5001/patrons"

export const getPatrons = () => {
    return fetch(_apiUrl).then((r) => r.json());
  };