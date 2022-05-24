export function Table({children, items = [], heading, subheading}) {
    return(
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-2">
                    <h3 className="display-5 mb-2 text-center">{heading}</h3>
                    <p className="mb-5 text-center">
                        <i className="text-info font-weight-bold">{items?.length}</i> {subheading}</p>
                    <table id="shoppingCart" className="table table-condensed table-responsive">
                    <thead>
                        <tr>
                            <th style={{width: '60%'}}>Product</th>
                            <th style={{width: '12%'}}>Price</th>
                            <th style={{width: '10%'}}>Quantity</th>
                            <th style={{width: '16%'}}></th>
                        </tr>
                        </thead>
                        {children}
                    </table>  
                    </div>
                </div>
            </div>
        </section>
    )
  }