import Main from "./Pages/Main.js";
import Basket from "./Pages/Basket.js";
import SinglePage from "./Pages/SinglePage.js";
import Nav from "./components/Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/basket" element={<Basket></Basket>}></Route>
          <Route path="/singlepage/:id" element={<SinglePage></SinglePage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
