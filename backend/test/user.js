import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/users";
const testTheServer = async () => {
  const { data } = await axios.get(baseUrl);

  console.log(data);
};

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDI1MDdjMjFlMzRlOWYzYWM3ZmEwYSIsImlhdCI6MTY2Mjg3Njk0MywiZXhwIjoxNjYzMTM2MTQzfQ.3Lxh2JJ8XDbjj00BQS630II6KaMiopaaR5bqoA2DXLE";
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
    cart: {
      operation: "push",
      value: {
        product: "6312b453666da3bdd551a7e5",
        qty: 3,
        buyingOptionId: "6312b453666da3bdd551a7e6",
      },
    },
    // "cart.<index>0.qty": 1,
  };
  const { data } = await axios.put(
    `${baseUrl}/${mainRoute}`,
    updateInfo,
    { headers: { authorization: `Bearer ${userToken}` } }
  );

  console.log(data);
  console.log(data.data.user.cart);
};

const main = async () => {
  try {
    await testUpdateMe();
  } catch (error) {
    console.log(error);
  }
};

main();
