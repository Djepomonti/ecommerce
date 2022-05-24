import { Link } from "react-router-dom";
import { Table } from "../components";

function Orders() {
  return (
    <Table heading="My Orders" subheading="orders in your account">
      <tbody>
        <div>No Orders yet </div>
      </tbody>
      <div className="row mt-4 d-flex">
        <div className="col-sm-4 mb-3 mb-m-1 text-md-left">
          <Link to="/">
            <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </Table>
  );
}
export default Orders;
