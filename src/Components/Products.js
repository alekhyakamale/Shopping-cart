import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import PropTypes from 'prop-types';

export default class Products extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                                <div className="img-container p-5">
                            <Link to="/Details">
                                <img src={img} alt="product img" style={{height:'100px', width:'100px'}} className="card-img-top text-center"/>
                            </Link>
                            <ButtonContainer className="card-btn" disabled={inCart?true:false} onClick={() => value.addToCart(id)}>
                                {inCart?(<i className="fas fa-cart-arrow-down" disabled></i>
                                    ): (<i className="fas fa-cart-arrow-down"></i>)}
                            </ButtonContainer>
                        </div>
                            </div>
                        )}
                    </ProductConsumer>
                </div>
                {/* card footer */}
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0"><span className="mr-1">Rs. {price}</span></h5>
                </div>
            </ProductWrapper>
        )
    }
}

ProductConsumer.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div `
.card{
    border-color: transparent;
    transition: all 0.3s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
}
.card-btn{
    position:absolute;
    bottom:0;
    right: 0;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
    .card-img-top{
        transition: all 0.3s linear;
    }
    .img-container:hover .card-img-top{
        transform:scale(1.2);
    }
}
`;