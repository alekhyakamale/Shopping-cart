import React from 'react'
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

export default function CartList({value}) {
    const {cart, SubTotal, Total, Tax, clearCart} = value;

    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}/>
            })}
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
        <Link to='/'>
            <button className="btn btn-outline-danger mb-3 px-5" type="button" onClick={()=>clearCart()}>Clear Cart</button>
        </Link>
        <h5><span className="text-blue">Sub Total: Rs. {SubTotal}</span></h5>
        <h5><span className="text-blue">Tax: Rs. {Tax}</span></h5>
        <h5><span className="text-blue">Total: Rs. {Total}</span></h5>
</div>
        </div>
    )
}
