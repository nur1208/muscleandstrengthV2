import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";
import { LoginModal } from "./components";
import {
  Home,
  Login,
  Product,
  Review,
  SignUp,
  Store,
} from "./pages";

function App() {
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
          </Route>
        </Route>
      </Routes>
      <LoginModal />
    </>
  );
}

export default App;
