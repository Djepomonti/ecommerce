
import React from 'react';

const styles =  {
  valid : {
    display: 'none'
  }, 
  errors: {
    color: 'crimson',
    display: 'block'
  } 
}
function Checkout() {
  return (
    <section className="pt-5 pb-5">
        <div className="container">
          <div className="py-5 text-center row justify-content-center">
            <div className="col-md-10">
              <h2>Client Details :</h2>
            </div>
          </div>
          <div className="row justify-content-center rounded shadow pt-5 pb-5 bg-white ">
          
            <div className="col-md-8 ">
              <form className="needs-validation">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input 
                      className="form-control"
                      type="text" 
                      name="first" 
                      id="firstName" 
                      placeholder="please enter first name" 
                      />
                    <div style={styles.valid}>
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input 
                      className="form-control"
                      type="text" 
                      name="last"  
                      id="lastName"  
                      placeholder="please enter last name" 
                      required="" />
                    <div style={styles.valid}>
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label for="email">Email <span className="text-muted">(Optional)</span></label>
                  <input 
                    className="form-control"
                    type="email" 
                    name="email"   
                    id="email" 
                    placeholder="you@example.com"  />
                  <div style={styles.valid}>
                    Please enter a valid email address for order updates
                  </div>
                </div>
               
                <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Continue to checkout 
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Checkout;
