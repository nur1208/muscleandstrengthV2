import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";
// const baseUrl =
//   "https://muscleandstrength-v2-backend.vercel.app";

const mainRoute = "api/v1/users";
const testTheServer = async () => {
  const { data } = await axios.get(baseUrl);

  console.log(data);
};

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDI1MDdjMjFlMzRlOWYzYWM3ZmEwYSIsImlhdCI6MTY4NDgyNDY0MywiZXhwIjoxNjg1MDgzODQzfQ.2EnCAhDBSBkJp5BDcbP5QwsSnNVbe-_e3Vl16M55WJE";
const testLogin = async () => {
  const userInfo = {
    email: "test@test.com",
    password: "12341234",
  };
  const { data } = await axios.post(
    `${baseUrl}/${mainRoute}/login`,
    userInfo
  );

  console.log(data);
};

const testUpdateMe = async () => {
  const updateInfo = {
    // cart: {
    //   operation: "push",
    //   value: {
    //     product: "6312b453666da3bdd551a7e5",
    //     qty: 3,
    //     buyingOptionId: "6312b453666da3bdd551a7e6",
    //   },
    // },
    "cart.<index>0.qty": "12",
  };
  const { data } = await axios.put(
    `${baseUrl}/${mainRoute}`,
    updateInfo,
    { headers: { authorization: `Bearer ${userToken}` } }
  );

  console.log(data);
  console.log(data.data.user.cart);
};

const testGetMe = async () => {
  const { data } = await axios.get(`${baseUrl}/${mainRoute}`, {
    headers: { authorization: `Bearer ${userToken}` },
  });

  console.log(data);
  console.log(data.data.cart);
};

const main = async () => {
  try {
    await testUpdateMe();
  } catch (error) {
    console.log(error);
  }
};

main();
