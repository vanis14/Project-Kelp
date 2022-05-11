import React, { Component } from "react";

import { connect } from "react-redux";

import { createItem } from "../items/actions";

import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom";

import thumbnail from '../assets/Thumbnail.jpg';

class AddItem extends Component {

  constructor(props) {

    super(props);

    this.onChangeName = this.onChangeName.bind(this);

    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.onChangeQuantity = this.onChangeQuantity.bind(this);

    this.onChangeCost = this.onChangeCost.bind(this);

    this.onChangeRetailPrice = this.onChangeRetailPrice.bind(this);

    this.saveItem = this.saveItem.bind(this);

    this.state = {

      name: "",

      description: "",

      quantity: "",

      cost: "",

      retail_price: "",

      redirect: false,

    };

  }

  onChangeName(e) {

    this.setState({

      name: e.target.value,

    });

  }

  onChangeDescription(e) {

    this.setState({

      description: e.target.value,

    });

  }

  onChangeQuantity(e) {

    this.setState({

      quantity: e.target.value,

    });

  }

  onChangeCost(e) {

    this.setState({

      cost: e.target.value,

    });

  }

  onChangeRetailPrice(e) {

    this.setState({

      retail_price: e.target.value,

    });

  }


  saveItem() {

    const { name, description, quantity, cost, retail_price } = this.state;

    this.props.createItem(name, description, quantity, cost, retail_price).then(() => {

      this.setState({

        redirect: true,

      });

    });

  }

  render() {

    const { redirect } = this.state;

    if (redirect) {

      return <Redirect to="/" />;

    }

    return (
      <div>

        <div><img src={thumbnail} className="thumbnail" /></div>
        <div className="submit-form">



          <div><h2>Add New Item</h2></div>
          <div>

            <div className="form-group">

              <label htmlFor="name">Name</label>

              <input

                type="text"

                className="form-control"

                id="name"

                required

                value={this.state.name}

                onChange={this.onChangeName}

                name="name"

              />

            </div>

            <div className="form-group">

              <label htmlFor="description">Description</label>

              <input

                type="text"

                className="form-control"

                id="description"

                required

                value={this.state.description}

                onChange={this.onChangeDescription}

                name="description"

              />

            </div>

            <div className="form-group">

              <label htmlFor="quantity">Quantity</label>

              <input

                type="number"

                className="form-control"

                id="quantity"

                required

                value={this.state.quantity}

                onChange={this.onChangeQuantity}

                name="quantity"

              />

            </div>

            <div className="form-group">

              <label htmlFor="cost">Cost</label>

              <input

                type="number"

                className="form-control"

                id="cost"

                required

                value={this.state.cost}

                onChange={this.onChangeCost}

                name="cost"

              />

            </div>

            <div className="form-group">

              <label htmlFor="retail_price">Retail Price</label>

              <input

                type="number"

                className="form-control"

                id="retail_price"

                required

                value={this.state.retail_price}

                onChange={this.onChangeRetailPrice}

                name="retail_price"

              />

            </div>



            <button onClick={this.saveItem} className="btn btn-success">

              Submit

            </button>

            <Link to={'/ItemList'}>

              <button>Cancel</button>

            </Link>

          </div>

        </div>
      </div>

    );

  }

}

export default connect(null, { createItem })(AddItem);