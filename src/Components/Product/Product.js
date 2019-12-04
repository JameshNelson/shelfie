import React, {Component} from 'react'; 

class Product extends Component {
    constructor(){
        super(); 
    }

    render(){
        return(
            <div className='product'>
                <div className='product-img'></div>
                <div className='product-box'>
                    <p className='product-title'>Fish</p>
                    <p className='product-price'>22</p>
                </div>

            </div>
        )
    }
}

export default Product; 