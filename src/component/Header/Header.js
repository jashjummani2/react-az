import React from "react";
import "./Header.css";
function Header({openCart}){
    
    return(
        <div className="header">
            <h1>My React Store</h1>
            <div>
                <button className="yellow-button" onClick={openCart}>
                    Cart
                </button>
            </div>
            {/* <Cart /> */}
            
            {/* {showCart && <div className="backdrop" onClick={closeCart}>
                <div className="modal">
                    
                Hello From Cart
                </div>
                </div>} */}
        </div>
    )
}
export default Header;