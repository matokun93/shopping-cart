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
    },
    loading: {
        marginTop: '20%',
        color: '#0a283E',
    }
}

class Products extends Component {
    render() {
        const { products, addToCart, isLoading } = this.props

        return (
            <div style={styles.products}>
                {
                    (isLoading)
                        ? <div style={styles.loading}>
                            <h2>Cargando Productos...</h2>
                        </div>
                        : products.map(product =>
                            <Product
                                addToCart={addToCart}
                                key={product.id}
                                product={product}
                            />)
                }
            </div>
        )
    }
}

export default Products