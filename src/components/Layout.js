import { Component } from "react"

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0a283E',
    },
    container: {
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout