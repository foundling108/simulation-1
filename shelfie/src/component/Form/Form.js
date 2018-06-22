import React, { Component } from 'react';
//import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
            productName: '',
            price: 0
        }

        this.clearAll = this.clearAll.bind(this);
    }

    //Image URL takes a url... that one shouldve been obvious
    addImage(url) {
        
    }

    // 12345678901234567890 20 characters allowed in Product Name
    addName(text) {
        //if (name.length <= 20) Because text is the parameter.
        if (text.length <= 20) {
        this.setState({ productName: text})
        }
    }

    //Only takes numbers up to 8 characters. 
    //how to add cents? Dont. problem solved.
    addPrice(val) {
        if (val.length <= 8) {
        this.setState({price: val})
        }
    }

    //Reset state back to this.state in constructor.
    clearAll() {
        this.setState({
            imageURL: '',
            productName: '',
            price: 0
        })
    }

    render() {
        return(
            <div>
                        
                   <p>Image URL:</p>
                   {/* Can be converted to url type in a setState */}
                   <input type="text" value={this.state.imageURL} onChange={e => this.addImage(e.target.value)} />
               
               
                   <p>Product Name:</p>
                   <input type="text" value={this.state.productName} onChange={e => this.addName(e.target.value)} />
                   {/* This input should work to add the name to the submission when the Add button is clicked. keyword = "should" */}
               
               
                   <p>Price:</p>
                   <input type="number" value={this.state.price} onChange={e => this.addPrice(e.target.value)}/>
               
               <div>
                   <button onClick={this.clearAll}>Cancel</button>
                   <button>Add to Inventory</button>
               </div>
            </div>
        )
    }
}

export default Form;


// You are going to start with the basic layout of the form and setting up the input boxes. You need to store the value of all three inputs in state.

//1 Start by creating three input elements in the JSX.

//2 Then create the 'Cancel' and 'Add to Inventory' buttons.

//3 Set up state with initial values for the inputs.

//4 Now you need to update state whenever those inputs change. Write a method for each input and and hook them up to the corresponding input box using an event handler.

//5 Next you need to reset the input values when the user clicks 'Cancel'. Write a method to reset state and hook it up to the cancel button using an event handler.