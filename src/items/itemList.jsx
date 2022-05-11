import React, { Component, useState } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveItem, deleteItem } from "../items/actions";

import thumbnail from '../assets/Thumbnail.jpg';

class ItemList extends Component {

  componentDidMount() {

    this.props.retrieveItem();

  }

  removeItem = (id) => {

    this.props.deleteItem(id).then(() => {

      this.props.retrieveItem();

    });

  };



  render() {

    {/*
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
   */}

    const { items } = this.props;



    return (



      <div className="list row">
        
        
        <div><img src={thumbnail} className="thumbnail"/></div>
        <div><h1>Item List</h1></div>
        {/*

        <div className="search">
          <TextField
            id="outlined-basic"

            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>


   

      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
     {// <List input={inputText} /> 
  }

 */}





        <div className="col-md-6">








          <table className="u-full-width">

            <thead>

              <tr>

                <th>&nbsp;Id&nbsp;</th>

                <th>Name</th>

                <th class="desc">Description</th>

                <th>Quantity</th>

                <th>Cost</th>

                <th>Retail Price</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {items &&

                items.map(

                  ({ id, name, description, quantity, cost, retail_price }, i) => (

                    <tr classname='item' key={i}>
                      <td>{id}</td>

                      <td>{name}</td>

                      <td class="desc">&nbsp;{description}</td>

                      <td>{quantity}</td>

                      <td>{cost}</td>

                      <td>{retail_price}</td>

                      <td>

                        <Link to={`/EditItem/${id}`}>

                          <button>Edit</button>

                        </Link>
                        
                        <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.removeItem(id) }}>
                          Delete

                        </button>


                      </td>

                    </tr>

                  )

                )}

            </tbody>

          </table>

        </div>

      </div>


    );

  }

}



const mapStateToProps = (state) => {

  return {

    items: state.items,

  };

};

export default connect(mapStateToProps, { retrieveItem, deleteItem })(ItemList);