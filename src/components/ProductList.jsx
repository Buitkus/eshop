import {
    BrowserRouter as Router,
    Routes,
    Route,
     
    } from "react-router-dom";

import OneProduct from './OneProduct'
import About from './About';
import Cart from './Cart';
import {useState} from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";



const ProductList = () => {
   const [products, setProducts] = useState([]);

   const addToCart = (item) => {
    //    console.log(item);
       const newCart = [...products];
       
       let productInCart = newCart.find(tempProduct => item.name === tempProduct.name)
      
       if(productInCart === undefined && item.countInStock > 0) {
           productInCart = {
               ...item, 
               quantity: 1
           }
           newCart.push(productInCart)
       } else if(productInCart && productInCart.quantity < item.countInStock) {
            productInCart.quantity++;
       } else {
             alert("Kiekis nepakankamas, mes susisieksime");
       }
      
     
     
      
       // pasidarom duomneu kopija newcart
       // gali rieketi lokalaus laikino kintamojo\
       // tikrinu per krepseli ar tokia preke yra
       // tikrinu per duomnenis ar pakanka kiekio countinstock
       // jei nera pridedu nauja preke
       // jei yra padidinu prekes kieki krepselyje
       // jei nepakanka kiekio sandelyje pranesu vartojui neleidziu prideti
       // uzsetinti nauja krepsiuka i state   setProducts(newCart)
       setProducts(newCart)
   }

//    console.log(products);
  const increaseQuantity = (item) => {
     console.log(item, " increaseQuantity");
     const newCart = [...products]
     let productInCart = newCart.find(tempProduct => item.name === tempProduct.name)
     if(productInCart && productInCart.quantity < item.countInStock) {
         productInCart.quantity++
     } else {
         alert("Kiekis nepakankamas, mes susisieksime");
     }
     setProducts(newCart);
  }

  const decreaseQuantity = (item) => {
    console.log(item, " decreaseQuantity");
    const newCart = [...products]
    let productInCart = newCart.find(tempProduct => item.name === tempProduct.name)
    
    if(productInCart && productInCart.quantity > 1) {
       productInCart.quantity--
       setProducts(newCart);
    } else {
          setProducts(newCart.filter(temItem => temItem !== item));
    }

 }


 const deleteProduct = (item) => {
     const newCart = [...products];
     setProducts(newCart.filter(temItem => temItem !== item));
 }


 const clearCart = () => {
    setProducts([]);
 }

  return (
         <Routes>
             <Route path="/" element={<About/>}/>
             <Route path="/products" element={<OneProduct addToCart={addToCart} />}/>
             <Route path="/cart" element={<Cart  products={products} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} 
             deleteProduct={deleteProduct} clearCart={clearCart} />}/>
         </Routes>
  )
}

export default ProductList