import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class Search extends React.Component {
  
    render() {
      return (

        <div className="search">
          
        <div><h1>Project Kelp</h1></div>
        
        <div><h2>Search Item</h2></div>

        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          className="searchfield"
        />
        <br/>
        </div>
      )
    }
  }
  

  
export default Search;