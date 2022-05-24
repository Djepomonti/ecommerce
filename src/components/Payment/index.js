
import React from 'react';
import Input from './Input'

function Payment() {
  return (
    <section className="pt-5 pb-5">
        <div className="container">
          {/* success banner */}
          <div className="py-5 text-center row justify-content-center">
            <div className="col-md-10">
              <h2>Checkout</h2>
            </div>
          </div>
          <div className="row justify-content-center rounded shadow pt-5 pb-5 bg-white ">
            <div className="col-md-4 offset-1 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                {/* cart items */}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$0.00</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 order-md-1">
            <form>   
                <h4 className="mb-3">Payment</h4>
                <hr className="mb-4" />
                <div className="row">
                  <Input label="Name on the card" className="col-md-6 mb-3" id="cc-name">
                      Name on card is required
                  </Input>
                  <Input label="Credit card number" className="col-md-6 mb-3" id="cc-number">
                      Credit card number is required
                  </Input>                  
                </div>
                <div className="row">
                  <Input className="col-md-3 mb-3" label="Expiration" id="cc-expiration">
                    Expiration date required
                  </Input>
                  <Input className="col-md-3 mb-3" label="CVV" id="cc-cvv">
                  Security code required
                  </Input>
                </div>
                {/* Paypal button */}
                <hr className="mb-4" />
                <button className="btn btn-primary btn-lg btn-block" type="submit"><i class="far fa-credit-card"></i> Confirmer</button>
             </form> 
            </div>
          </div>
        </div>
      </section>
  );
}
export default Payment;
