import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";
import { Home, Login, Store } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path="customer/account">
            <Route path="login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
