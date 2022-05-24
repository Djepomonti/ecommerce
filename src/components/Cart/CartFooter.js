import React from 'react';
import { Link } from "react-router-dom";

const styles = {
  disabled: {
    cursor: 'not-allowed', 
    opacity: 0.5
  }
}
  
function CartFooter() {
    return(
      <>
       <div className="text-right mb-4">
          <h4>Subtotal:</h4>
          <h1>€0.00</h1>
        </div>  
        <div className="d-flex justify-content-between">
        <Link  to="/">
          <i className="fas fa-arrow-left mr-2"></i> Continue Shopping 
        </Link>
        <Link className="btn btn-primary mb-4 btn-lg pl-5 pr-5" to="/checkout">
          Checkout
        </Link>
      </div>
      </> 
    )
  }
  export default CartFooter