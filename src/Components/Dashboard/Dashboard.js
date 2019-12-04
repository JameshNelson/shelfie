import React, {Component} from 'react'; 
import Product from '../Product/Product'; 

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='dash'>
                <Product />
            </div>
            
        )
    }
}

export default Dashboard; 