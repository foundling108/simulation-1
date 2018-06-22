import React, { Component } from 'react';

import Product from '../Product/Product.js';


class Dashboard extends Component {



    render() {
        return(
            <div>
                {/* {this.props.inentory.map( (element) => {
                    return <Product key={element.id} item={element}/>
                })} */}
                {/* this.pleaseworkdammit. */}
            </div>
        )
    }
}

export default Dashboard;

// In this step you will set up the dashboard to display the inventory.

//1 Store the inventory list in the App state. This will make it easier to update with new products later.
//      Fill the list with some dummy products so you have something to display.
//      Each one should have a name, price, and image.
//      You can get rid of your dummy data once you are pulling the data from the backend.

//2 Pass the .inventory list down to the Dashboard component through .props.
// this.props.inventory then make a new array? .map? -yes. return Product with a key of element and id? element.id? 

//3 Inside Dashboard you should .map over the inventory list and render the Product component for each product. At this point you should see the word 'Product' repeated the same number of times as you have products in your dummy data.

//4 Now you should update the Product component to display a name, price, and image based on props.

//5 Go back to Dashboard and update where you're mapping over the inventory to pass the current product information to the Product component through props.