
import Header from "./component/Header/Header";
import Products from "./component/Products/Products";
import productsData from "./data/products.json";

function App() {
  return (
    <div className="App">
      {/* <h1>This is my first React app!!</h1> */}
      <Header />
      <Products products={productsData} />
    </div>
  );
}

export default App;
