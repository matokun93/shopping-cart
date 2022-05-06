import { useEffect, useState } from 'react';
import './App.css';

import Products from './components/Products'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import axios from 'axios';

const App = () => {

  const [state, setState] = useState({
    products: [],
    cart: [
    ],
    isCartVisible: false
  })

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setState({
        ...state,
        products: res.data,
      }))
  }, [])

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(res => setState({
  //       ...state,
  //       products: res,
  //     }))
  // }, [])

  const addToCart = (product) => {
    const { cart } = state
    if (cart.find(x => x.title === product.title)) {
      const newCart = cart.map(x => x.title === product.title
        ? ({
          ...x,
          quantity: x.quantity + 1
        })
        : x)
      return setState({
        ...state,
        cart: newCart
      })
    }
    console.log(product);
    return setState({
      ...state,
      cart: state.cart.concat({
        ...product,
        quantity: 1
      })
    })
  }

  const showCart = () => {
    if (!state.cart.length) {
      return
    } else {
      setState({
        ...state,
        isCartVisible: !state.isCartVisible
      })
    }
  }

  const { isCartVisible } = state

  return (
    <div>
      <Navbar
        /* puedo sacar las propiedades del tate como carro, o isCartViible, y dejarlas en variables, para luego pasarlas a los
        componentes de abajo a traves de los prrops, o puedo ahorrarme el paso de dejarlas en variables y ponerlas directamente
        desde el state al prop, ejemplo: product={this.state.product} (prop sacado directo del state uando this por obligacion)
        const { product } = this.state -----> product={product} (product lo saco del state y lo guardo en una variable primero) 
        en este caso hice eso solo con isCartViible, las otras propiedades las paso directo desde el state al prop*/
        cart={state.cart}
        isCartVisible={isCartVisible}
        showCart={showCart}
      />
      <Layout>
        <Products
          products={state.products}
          addToCart={addToCart}
        />
      </Layout>
    </div>
  )
}

export default App;
