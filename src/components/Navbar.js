import { Component } from "react"
import Logo from './Logo'
import Cart from './Cart'

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '100px',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        position: 'fixed',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
    }
}

class Navbar extends Component {
    render() {
        const { cart, isCartVisible, showCart } = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Cart cart={cart}
                    isCartVisible={isCartVisible}
                    showCart={showCart}
                />
            </nav>
        )
    }
}

export default Navbar