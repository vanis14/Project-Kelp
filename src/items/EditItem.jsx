import React, { Component } from "react";

import { connect } from "react-redux";

import { updateItem } from "./actions";

import { Redirect } from "react-router-dom";

import stockManage from "./stockManage";

import { Link } from "react-router-dom";

import thumbnail from '../assets/Thumbnail.jpg';

class EditItem extends Component {

  constructor(props) {

    super(props);

    this.onChangeName = this.onChangeName.bind(this);

    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.onChangeQuantity = this.onChangeQuantity.bind(this);

    this.onChangeCost = this.onChangeCost.bind(this);

    this.onChangeRetailPrice = this.onChangeRetailPrice.bind(this);

    this.saveItem = this.saveItem.bind(this);

    this.state = {

      currentItem: {

        name: "",

        description: "",

        quantity: "",

        cost: "",

        retail_price: "",

      },

      redirect: false,

    };

  }

  componentDidMount() {

    this.getItem(window.location.pathname.replace("/EditItem/", ""));

  }

  onChangeName(e) {

    const name = e.target.value;

    this.setState(function (prevState) {

      return {

        currentItem: {

          ...prevState.currentItem,

          name: name,

        },

      };

    });

  }

  onChangeDescription(e) {

    const description = e.target.value;

    this.setState(function (prevState) {

      return {

        currentItem: {

          ...prevState.currentItem,

          description: description,

        },

      };

    });

  }

  onChangeQuantity(e) {

    const quantity = e.target.value;

    this.setState(function (prevState) {

      return {

        currentItem: {

          ...prevState.currentItem,

          quantity: quantity,

        },

      };

    });

  }

  onChangeCost(e) {

    const cost = e.target.value;

    this.setState(function (prevState) {

      return {

        currentItem: {

          ...prevState.currentItem,

          cost: cost,

        },

      };

    });

  }

  onChangeRetailPrice(e) {

    const retail_price = e.target.value;

    this.setState(function (prevState) {

      return {

        currentItem: {

          ...prevState.currentItem,

          retail_price: retail_price,

        },

      };

    });

  }


  getItem(id) {

    stockManage.get(id).then((response) => {

      this.setState({

        currentItem: response.data,

      });

    });

  }

  saveItem() {

    this.props

      .updateItem(this.state.currentItem.id, this.state.currentItem)

      .then(() => {

        this.setState({

          redirect: true,

        });

      });

  }

  render() {

    const { redirect, currentItem } = this.state;

    if (redirect) {

      return <Redirect to="/ItemList" />;

    }

    return (
      <div>

        <div><img src={thumbnail} className="thumbnail" /></div>

        <div className="submit-form">


          <div><h2>Edit Item</h2></div>

          <div>

            <div className="form-group">

              <label htmlFor="name">Name</label>

              <input

                type="text"

                className="form-control"

                id="name"

                required

                value={currentItem.name}

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

                value={currentItem.description}

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

                value={currentItem.quantity}

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

                value={currentItem.cost}

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

                value={currentItem.retail_price}

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

export default connect(null, { updateItem })(EditItem);