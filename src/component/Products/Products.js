import productsData from "../../data/products.json"
import "./Products.css";

function Products(){
    
    return <div className="products-container">
        {/* key has to given to the child in map */}
        {productsData.map(product=> <div key={product.id} className="product">
            <div className="product-name">{product.name}</div>
            <img src={require(`../../assets/${product.image}`)} alt={product.name} />
            <button className="yellow-button">Add to Cart</button>
        </div>)}

    </div>
}
export default Products;