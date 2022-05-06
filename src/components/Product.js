import { Component } from "react"
import Button from './Button'

const styles = {
    product: {
        border: '1px solid #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '400px',
        padding: '2rem 2rem',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '2rem'
    },
    img: {
        width: '250px',
        height: '250px',
        marginBottom: '1.4rem'
    }
}

class Product extends Component {
    render() {
        const { product, addToCart } = this.props

        return (
            <div style={styles.product}>
                <img style={styles.img} alt={product.title} src={product.image} />
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <Button onClick={() => addToCart(product)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Product