export const fetchWorldData = async () => {
  const res = await fetch('https://corona.lmao.ninja/v2/all');
  return res.json();
};

export const fetchAllCountryData = async () => {
  const res = await fetch('https://corona.lmao.ninja/v2/countries');
  return res.json();
};
