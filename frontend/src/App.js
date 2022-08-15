import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";
import { Home, Login, Product, SignUp, Store } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="customer/account">
            <Route path="login" element={<Login />} />
            <Route path="create" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
