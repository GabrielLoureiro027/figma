
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CadastrarProduto from "./pages/CadastrarProduto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/CadastrarProduto  " element={<CadastrarProduto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
