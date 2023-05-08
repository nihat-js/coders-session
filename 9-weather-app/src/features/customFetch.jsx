export const getCountry = async () => {
  try {
    let response = await axios.get(baseURL);
    console.log("test", response);
    setItem(response?.data);
  } catch (err) {
    console.log(err);
  }
};