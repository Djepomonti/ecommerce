import React from 'react'
const styles = {
    gallery : {
      height: 'calc(100vh - 120px)', 
      overflow: 'scroll'
    }
}

// main
function Gallery() {
    return(<div className="col-md-8 order-md-2 col-lg-9">
      <div className="container-fluid" style={styles.gallery}>
        <div className="row">
            {/* products */}
        </div>
      </div>
    </div>)
  }
  export default Gallery