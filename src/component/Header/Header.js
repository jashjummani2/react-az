import React, { useState } from "react";
import "./Header.css";
import Modal from "../UI/Modal"
function Header(){
    const [showCart,setShowCart] = useState(false);
    const openCart = () => {
        setShowCart(true);
    }
    const closeCart = () =>{
        setShowCart(false)
    }
    return(
        <div className="header">
            <h1>My React Store</h1>
            <div>
                <button className="yellow-button" onClick={openCart}>
                    Cart
                </button>
            </div>
            <Modal show={showCart} onClose={closeCart}>
                Hello from Cart
            </Modal>
            
            {/* {showCart && <div className="backdrop" onClick={closeCart}>
                <div className="modal">
                    
                Hello From Cart
                </div>
                </div>} */}
        </div>
    )
}
export default Header;