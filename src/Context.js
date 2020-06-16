import React, { Component } from 'react'
import {storeProducts} from './Data'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        cart:[],
        SubTotal:0,
        Tax:0,
        Total:0
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts};
        })
    }
    getItem = (id) =>{
        const product = this.state.products.find(item => item.id===id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product]};
        },() => {this.addTotals()})
    }
    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selected = tempCart.find(item => item.id===id);
        const index = tempCart.indexOf(selected);
        const product = tempCart[index];
        product.count += 1;
        product.total = product.price * product.count;
        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        },() =>{this.addTotals()}
        )
        if(product.count<=0){
            return false;
        }
    }
    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selected = tempCart.find(item => item.id===id);
        const index = tempCart.indexOf(selected);
        const product = tempCart[index];
        product.count = product.count - 1;
        product.total = product.price * product.count;
        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        },() =>{this.addTotals()}
        )
    }
    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() =>{
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () =>{
            this.addTotals();
        }
        )
    }
    clearCart = () =>{
        this.setState(()=>{
            return {cart:[]}
        },() =>{
            this.setProducts();
            this.addTotals();
        }
        );
    }
    addTotals = () => {
        let SubTotal = 0;
        this.state.cart.map(item =>{SubTotal+=item.total});
        const tempTax = SubTotal*0.1;
        const Tax = parseFloat(tempTax.toFixed(2));
        const Total = SubTotal + Tax;
        this.setState(() => {
            return {
                SubTotal: SubTotal,
                Tax: Tax,
                Total: Total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider  value={{
                ...this.state,
                 handleDetail: this.handleDetail,
                  addToCart: this.addToCart,
                  increment: this.increment,
                  decrement: this.decrement,
                  removeItem: this.removeItem,
                  clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};