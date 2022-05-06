import { Component } from 'react'
import Product from './Product'

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '0 4rem',
    }
}

class Products extends Component {
    render() {
        const { products, addToCart } = this.props

        return (
            <div style={styles.products}>
                {products.map(product =>
                    <Product
                        addToCart={addToCart}
                        key={product.id}
                        product={product}
                    />)}
            </div>
        )
    }
}

export default Products