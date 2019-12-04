import React, {Component} from 'react'; 
import axios from 'axios'; 

class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleAddImg = this.handleAddImg.bind(this); 
        this.handleAddPrice = this.handleAddPrice.bind(this); 
        this.handleAddName = this.handleAddName.bind(this); 
        this.AddProduct = this.addProduct.bind(this); 
    }

    handleAddName(val){
        this.setState({
            name: val
        })
    }

    handleAddPrice(val){
        this.setState({
            price:val
        })
    }

    handleAddImg(val){
        this.setState({
            imgurl: val
        })
    }


    addProduct(body){
        
        axios.post('/api/product', body).then(res => {
            console.log(res.data)
            this.setState({

            })
        })
    }



    render(){
        return(
            <div className='form'>
                <div className='form_img_preview'></div>
                <p>Image URL:</p>
                <input type='text'
                    onChange={this.handleAddImg}
                />
                <p>Product Name:</p>
                <input type='text' 
                    onChange={this.handleAddName}
                />
                <p>Price:</p>
                <input type='text'
                    onChange={this.handleAddPrice}
                />
                <div className='button_container'></div>
                <button>Cancel</button>
                <button>Add to Inventory</button>

            </div>
        )
    }
}

export default Form; 