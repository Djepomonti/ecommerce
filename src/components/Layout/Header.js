import React from 'react';
import { Link } from "react-router-dom";

function CartDropdown({ show, handleOnClick }) {
	const items = []
	return(
	<div onClick={handleOnClick} className={`dropdown-menu dropdown-menu-right p-3 ${show && 'show'}`} aria-labelledby="dropdownCart" style={{minWidth:'300px'}}>
	<div className="d-flex justify-content-between"> 
		<span>0</span>
		<span className="emphasis">€0.00</span>
	</div>
	<div className="dropdown-divider"></div>
	<ul className="shopping-cart-items pt-2 pl-0" aria-labelledby="dropdownCart">
		{items.map(item => {
			return(
			<li className="row mt-3">
				<div className="col-md-4 col-2">
					<img src={`images/men_1.png`} alt="" className="img-fluid rounded mb-2 shadow" />
				</div>
				<div className="col-8">
				<h6>
					<Link to={{
						pathname: "/product",
						props: { product: 'men_1' },
					}}>Product name</Link>	
				</h6>
				<span className="text-muted">quantity: 1</span><br />
				<span className="emphasis">$0.00</span></div>
			</li>)
		})}
	</ul>
	<Link to='/cart'  className="btn btn-md btn-block btn-orange mt-3" style={{margin: 0}}>view cart</Link>	
</div>)
}
function Header() {
	const [currentLink, setCurrent] = React.useState('')
	const [show, setShow] = React.useState(false)
	const links = [ "cart", "orders"]
	const handleOnClick = () => setShow(!show)
    return( 
	<header className="target-hover">
    <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
    <div className="container">
	  <Link to='/' className="navbar-brand font" style={{fontSize: '30px'}}>CLICK & COLLECT</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarNav3">
        <ul className="navbar-nav ml-auto">
          {links.map((link, index)=> {
              const isCurrent = link === currentLink
              const isActive = link === currentLink && 'active'
              return( 
              <li key={index} className={`nav-item ${isActive}`}>
                  <Link to={link} className="nav-link" aria-current={isCurrent}>{link}</Link>
              </li>)
          })}
		
			<li className="nav-item dropdown" onClick={() => setShow(!show)} >
				<a className={`nav-link dropdown-toggle ${show && 'show'}`} >
				<i className="fas fa-shopping-cart"></i> <span className="badge bg-orange"></span></a>
				<CartDropdown show={show} handleOnClick={handleOnClick}/>
		   </li>  
        </ul>
      </div>
    </div>
  </nav>
  </header>)
}
export default Header