import React, { Component } from 'react';

export class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        };
    }

    handleButtonClick = (id) => {
        this.setState({ selectedItem: id });
    }

    render() {
        return (
            <main id="products">
                {this.props.items.map((output, id) => (
            
                    <div className='product' key={id}>
                        <div className='product-item' >
                            <img
        style={{ width: '330px', height: '400px' }} src={output.link} className="product-image" alt="Product Image" />
                            <div className="product-title">
                                <h2 className="product-name">{output.title}</h2>
                                <p className="product-cost">{output.cost}$</p>
                                <button onClick={() => this.handleButtonClick(id)} className="product-button">About</button>
                            {this.state.selectedItem === id && <p>{output.description}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </main>
            
        );
    }
}

export default Items;
