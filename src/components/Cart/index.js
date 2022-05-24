
import React from 'react';
import CartFooter from './CartFooter'
import { Table } from '../components'

function Cart() {
  return (
    <Table heading="My Shopping Cart" subheading="items in your cart">
      <tbody> 
      <div>No Items in the cart yet </div>
      </tbody>
      <CartFooter />
    </Table>
  );
}
export default Cart;
