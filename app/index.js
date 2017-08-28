import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import Splash from './Splash';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      splash: true
    }
  }

  componentWillMount(){
    setTimeout(()=>{this.setState({splash:false})}, 4000);
  }
  render() {
    if(this.state.splash){
      return <Splash/>
    }
    return <Root />;
  }
}

export default App;
