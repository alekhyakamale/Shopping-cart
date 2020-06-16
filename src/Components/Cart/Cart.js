import React from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../Context';
import Empty from './Empty';
import CartList from './CartList';


export default function Cart() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="Cart"/>
                                    <CartColumns/>
                                    <CartList value = {value}/>
                                </React.Fragment> 
                            )
                        }
                        else{
                            return(
                                <Empty/>
                            )
                        }
                    }}
                </ProductConsumer>

            </section>
        )
    }

