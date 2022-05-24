import React from 'react'
import Filters from './Filters'

// sidebar
function Sidebar() {
  const filters = ['Top', 'Bottom', 'Jacket']
  const categories = ['Women', 'Men', 'Kids', 'Accessories']
    return(
    <div className="col-md-4 order-md-1 col-lg-3 sidebar-filter">
      <h6 className="text-uppercase font-weight-bold mb-3">Categories</h6>
      {categories.map((filter, index) => <Filters.Category key={index} index={index} name={filter} />)}
      <div className="divider mt-5 mb-5 border-bottom border-secondary"></div> 
      <h6 className="text-uppercase font-weight-bold mb-3">Filters</h6>
      {filters.map((filter, index) => <Filters.Filter key={index} name={filter} />)}
    </div>)
}
export default Sidebar