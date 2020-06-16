import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
                <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/Cart' className="ml-auto">
                    <ButtonContainer><span><i className="fas fa-cart-arrow-down"></i></span>  Cart</ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
.nav-link{
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}
`
