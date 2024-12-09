const _apiUrl = "/api/genres";

export const getGenres = () => {
  return fetch('https://localhost:5001/genres').then((res) => res.json());
};
