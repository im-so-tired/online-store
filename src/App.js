import Main from "./Pages/Main";
import Basket from "./Pages/Basket";
import SinglePage from "./Pages/SinglePage";
import Nav from "./components/Nav";
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
