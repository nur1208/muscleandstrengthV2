import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";
import { Home, Store } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<div>login</div>} />
      </Routes>
    </>
  );
}

export default App;
