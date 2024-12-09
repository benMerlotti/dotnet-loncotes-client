const _apiUrl = "/api/materialtypes";

export const getMaterialTypes = () => {
  return fetch('https://localhost:5001/materialtypes').then((res) => res.json());
};
