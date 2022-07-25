import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/login" element={<div>login</div>} />
      </Routes>
    </>
  );
}

export default App;
