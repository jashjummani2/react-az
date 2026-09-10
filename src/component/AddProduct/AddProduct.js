import Modal from "../UI/Modal";
import "./AddProduct.css";
import { useRef } from "react";

function AddProduct({showAddProduct,closeAddProduct, onAddProduct}){
    
    const nameRef = useRef();
    function handleSubmit(e){
        e.preventDefault();
        onAddProduct(nameRef.current.value);
    }
    return(
        <Modal show={showAddProduct} onClose={closeAddProduct}>
            <div className="add-product-container">
                <div className="add-product-heading">Add Product</div>
                <form className="add-product-form" onSubmit={handleSubmit}>
                    <div className="form-label">
                        Enter Product Name:
                    </div>
                    <input ref = {nameRef} className="form-input" type="text"/>
                    <button type="submit" className="yellow-button submit-button">
                        Add Product
                    </button>
                </form>
                
            </div>
        </Modal>
    );
}
export default AddProduct;
