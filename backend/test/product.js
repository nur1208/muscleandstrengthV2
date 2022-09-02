import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/products";
const testTheServer = async () => {
  const { data } = await axios.get(baseUrl);

  console.log(data);
};

const testGetProducts = async () => {
  const { data } = await axios.get(
    `${baseUrl}/${mainRoute}?type=nur`
  );
  console.log(data);

  data.data.doc.forEach((doc) => console.log(doc));
};

const main = async () => {
  try {
    await testGetProducts();
  } catch (error) {
    console.log(error);
  }
};

main();
