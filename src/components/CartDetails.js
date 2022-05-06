import { Component } from "react"

const styles = {
    cart: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    li: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
        gap: '2rem'
    },
    p: {
        width: '500px',
    },
}

class CartDetails extends Component {
    render() {
        const { cart } = this.props
        return (
            <div style={styles.cart}>
                <ul style={styles.ul}>
                    {cart.map(x =>
                        <li style={styles.li} key={x.title}>
                            <img alt={x.title} src={x.image} width='50' height='32' />
                            <p style={styles.p}>{x.title}</p>
                            <span>{x.quantity}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default CartDetails