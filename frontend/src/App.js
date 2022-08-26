import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";
import { LoginModal } from "./components";
import { useAutoLogin } from "./hooks";
import {
  Account,
  Home,
  Login,
  LogoutSuccess,
  Product,
  Review,
  SignUp,
  Store,
} from "./pages";

function App() {
  useAutoLogin();

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path="product/:id" element={<Product />} />
          <Route
            path="reviews/brands/:brand/:product"
            element={<Review />}
          />
          <Route path="customer/account">
            <Route path="login" element={<Login />} />
            <Route path="create" element={<SignUp />} />
            <Route
              path="logoutSuccess"
              element={<LogoutSuccess />}
            />
            <Route path=":navItem" element={<Account />} />
          </Route>
        </Route>
      </Routes>
      <LoginModal />
    </>
  );
}

export default App;
