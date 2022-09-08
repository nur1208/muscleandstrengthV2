import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/products";
const testTheServer = async () => {
  const { data } = await axios.get(baseUrl);

  console.log(data);
};

const testGetProducts = async () => {
  const { data } = await axios.get(`${baseUrl}/${mainRoute}?`);
  console.log(data);

  data.data.doc.forEach((doc) => console.log(doc));
};

const testCountProducts = async () => {
  const { data } = await axios.get(
    `${baseUrl}/${mainRoute}/count?q=pro`
  );
  console.log(data);
};

const testUpdateProduct = async () => {
  // PhedraCut Water X Diuretic
  const { data } = await axios.put(
    `${baseUrl}/${mainRoute}/6312b453666da3bdd551a7e5`,
    {
      type: { operation: "pull", value: "testType" },
      category: { operation: "pull", value: "testCategory" },
      subCategory: {
        operation: "pull",
        value: "testSubCategory",
      },
      name: "PhedraCut Water X Diuretic",
      buyingOptions: [
        {
          cost: { beforeDiscount: 0, regularPrice: 14.99 },
          isInStock: true,
          title: "90 Capsules",
          serving: 30,
          deal: "Buy 1 Get 1 FREE",
          options: [],
          _id: "6312b453666da3bdd551a7e6",
        },
      ],
    }
  );

  console.log(data.data.doc.buyingOptions);
  console.log(data.data.doc.type);
  console.log(data.data.doc.name);
  console.log(data.data.doc.category);
  console.log(data.data.doc.subCategory);

  //   data.data.doc.forEach((doc) => console.log(doc));
};

const main = async () => {
  try {
    await testGetProducts();
  } catch (error) {
    console.log(error);
  }
};

main();
