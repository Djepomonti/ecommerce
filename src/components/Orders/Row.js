function Row() {
    return(
    <tr>
        <td data-th="Product">
          <h4>Order # 133781 </h4>
          <p className="font-weight-light">Date : </p>
        </td>
        
        <td className="actions" data-th="">
          <div className="text-right">
            <button className="btn btn-white border-secondary bg-white btn-md mb-2">
              <i className="fas fa-sync"></i>
            </button>
          </div>
        </td>
      </tr>)
}
export default Row