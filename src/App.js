
import Header from "./component/Header/Header";
import Products from "./component/Products/Products";
// import productsData from "./data/products.json";
import Cart from "./component/Cart/Cart"
import { useState } from "react";
import AddProduct from "./component/AddProduct/AddProduct";
import initialProducts from "./data/products.json";
function App() {

  const [showCart,setShowCart] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
    const openCart = () => {
        setShowCart(true);
    }
    const closeCart = () =>{
        setShowCart(false)
    }
    const openAddProduct = () => {
        setShowAddProduct(true);
    }
    const closeAddProduct = () =>{
        setShowAddProduct(false)
    }
    const [cartItems,setCartItems] = useState([]);
    // const [quantity, setQuantity] = useState(1);
    const handleIncreaseQuantity = (productId)=>{
      // console.log("inc");
      // console.log(productId);
      const productInCartIndex = cartItems.findIndex( item => item.id === productId);
      const updatedCartItem = [...cartItems];
      updatedCartItem[productInCartIndex].quantity += 1;
      setCartItems(updatedCartItem);
    }
    const [products,setProducts] = useState(initialProducts);
    const handleDecreaseQuantity=(productId)=>{
      // console.log("Dec");
      // console.log(productId);
      const productInCartIndex = cartItems.findIndex( item => item.id === productId);
      let updatedCartItem = [...cartItems];
      if (updatedCartItem[productInCartIndex].quantity===1){
        updatedCartItem = updatedCartItem.filter(item=>item.id!==productId);
      }
      else{
      updatedCartItem[productInCartIndex].quantity -= 1;
    }
    setCartItems(updatedCartItem);
      
    }
    const handleAddToCart = (productId,productName, productImage) =>{
      console.log("Added to cart");
      console.log(productName);
      const productInCartIndex = cartItems.findIndex( item => item.id === productId);
      if (productInCartIndex===-1){
      const cartItem = {id:productId,
            name:productName,
            image:productImage,
            quantity:1,
            price:100,
          }
      setCartItems((state)=>
        [...state,
          cartItem,
        ]
    );}
    else{
      const updatedCartItem = [...cartItems];
      updatedCartItem[productInCartIndex].quantity += 1;
      setCartItems(updatedCartItem);
    }
  }
  const handleAddProduct = (productName)=>{
    console.log("Added product");
    console.log(productName);
    const product = {
      id:products.length + 1,
      name:productName,
      image:"default_product.png",
      price:100,
    }
    setProducts((state)=> [...state, product]);
    closeAddProduct();
  }
  return (
    <div className="App">
      {/* <h1>This is my first React app!!</h1> */}
      <Header openAddProduct={openAddProduct} openCart={openCart}/>
      <Products onAddToCart = {handleAddToCart} products={products} />
      <Cart showCart={showCart} closeCart={closeCart} cartItems={cartItems} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity} />
      <AddProduct showAddProduct={showAddProduct} closeAddProduct={closeAddProduct} onAddProduct={handleAddProduct}/>
    </div>
  );
}

export default App;
