import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.storeProducts;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} style={{width:'300px', height: '300px'}} alt="product"/>
                                    </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Model Name: {title}</h2>
                                    <h4>Company: {company}</h4>
                                    <h4 className="text-blue"><strong>
                                        Price: Rs. {price}</strong></h4>
                                        <p className="font-weight-bold mt-3 mb-0">
                                            About this product: {info}
                                        </p>
                                        <div><br></br>
                                            <div className='row'>
                                            <Link to='/'>
                                    <ButtonContainer>Back to Products</ButtonContainer>
                                </Link>
                                            </div><br></br>
                                <div className='row'>
                                    <Link to='/Cart'>
                                    <ButtonContainer disabled={inCart?true:false} onClick={()=>value.addToCart(id)}>
                                    {inCart?'In Cart':'Add to Cart'}
                                </ButtonContainer>
                                    </Link>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
