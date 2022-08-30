import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/users";
const testTheServer = async () => {
  const { data } = await axios.get(baseUrl);

  console.log(data);
};

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDI1MDdjMjFlMzRlOWYzYWM3ZmEwYSIsImlhdCI6MTY2MTg4OTE2OSwiZXhwIjoxNjYyMTQ4MzY5fQ.ox6oYJXhhQncqDvnxfRCsQcvCPc_BTOpIe8xMrmRGrw";
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
    firstName: "updated first name 2",
    reviewingAs: "md nur  2",
  };
  const { data } = await axios.put(
    `${baseUrl}/${mainRoute}`,
    updateInfo,
    { headers: { authorization: `Bearer ${userToken}` } }
  );

  console.log(data);
};

const main = async () => {
  try {
    await testUpdateMe();
  } catch (error) {
    console.log(error);
  }
};

main();
