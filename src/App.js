import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AddItem from "./items/AddItem";
import EditItem from "./items/EditItem";
import { React, useState } from "react";
import ItemList from "./items/itemList";
import Navbar from "./components/navbar";
import Login from "./components/loginComponent";
import Search from "./items/Search";
import About from "./items/About";
import HomePage from './items/HomePage';

export default function App() {



  return (


    <div className="main">

     
      <Router>
        <Navbar />

        <Switch>
          <Route path="/AddItem">
            <AddItem />
          </Route>
          <Route path="/EditItem">
            <EditItem />
          </Route>
          <Route path="/Search">
            <Search />
            <br/>
            <ItemList/>
          </Route>
          <Route path="/ItemList">
            <ItemList />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>


      </Router>

    </div>
  );


}

