import React, {useContext} from 'react'
import classes from './Product.module.css'
import ProductForm from './ProductForm';
import CartContext from '../../../store/cart-context';

const Product = (props) => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => { //need explanation on this
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount 
        })
    }
    
    return (
        <li className={classes.product}>
            <p>{props.name}</p>
            <p className={classes['product-description']}>{props.description}</p>
            <p>{props.price}</p>
            <ProductForm id={props.id} onAddToCart={addToCartHandler} />
        </li>

    )
}

export default Product;