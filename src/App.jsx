import {BrowserRouter , Routes , Route} from "react-router-dom";
import productList from "./components/productList";
import addProducts from "./components/addProducts";


export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={productList} />
          <Route path="/add" Component={addProducts} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
