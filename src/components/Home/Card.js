import React from 'react'
import { Link } from "react-router-dom";

function Card() {
    return(
        <div className="col-6 col-md-6 col-lg-4 mb-3">
            <div className="card h-100 border-0">
                <div className="card-img-top">
                <img src={`images/men_1.png`} className="img-fluid mx-auto d-block" alt="Card image cap" />
                </div>
                <div className="card-body text-center">
                <h4 className="card-title">
                    <Link to={{
                          pathname: "/product",
                          props: { product: 'men_1' }
                      }}  
                      className=" font-weight-bold text-dark text-uppercase small">PRODUCT NAME</Link>
                </h4>
                <h5 className="card-price small text-warning">
                    €49
                </h5>
                </div>
            </div>
        </div>
    )
}
export default Card