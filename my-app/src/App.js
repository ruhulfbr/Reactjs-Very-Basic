import React, { Component } from 'react';
import './App.css';

class HellowWorld extends Component{

  customStyleLink = {
    backgroundColor : 'black',
    color:'white',
    paddingLeft: '20px'
  }

  render(){
    return(
      <a href={this.props.link} style={this.customStyleLink}>{this.props.linkTxt}</a>

    )

  }
}

export default HellowWorld;

