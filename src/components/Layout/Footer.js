function Footer() {
	return(
	<nav className="navbar navbar-dark bg-dark fixed-bottom">
		<div className="container-fluid">
			<footer className="text-white" ><small>&copy; Copyright {new Date().getFullYear()} - All Rights Reserved</small> </footer> 
		</div>
	</nav>)
}
export default Footer