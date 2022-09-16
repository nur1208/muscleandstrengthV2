import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";
import { LoginModal } from "./components";
import { useAutoLogin } from "./hooks";
import {
  Account,
  Brand,
  Categories,
  Category,
  Checkout,
  Home,
  Login,
  LogoutSuccess,
  Product,
  Review,
  Search,
  ShoppingCart,
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
          <Route path="search/*" element={<Search />} />
          <Route
            path="product/:name/:id"
            element={<Product />}
          />
          <Route path="brands/:name" element={<Brand />} />
          <Route
            path="reviews/brands/:brand/:product/:id"
            element={<Review />}
          />
          <Route path="category">
            <Route index element={<Categories />} />
            <Route path=":type" element={<Category />} />
            <Route
              path=":type/:subType"
              element={<Category />}
            />
          </Route>
          <Route path="checkout">
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="onpage" element={<Checkout />} />
          </Route>
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
