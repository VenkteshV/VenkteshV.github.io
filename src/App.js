import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import data from "./data.json"
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      data: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getdata(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    //this.getdata();
    this.setState({data: data})
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main}/>
        <About data={this.state.data.main}/>
        {/* <Portfolio data={this.state.data.portfolio}/> */}
        <Resume data={this.state.data.resume} address = {this.state.data.main} />
        {/* <Testimonials data={this.state.data.testimonials}/> */}
        {/* <Contact data={this.state.data.main}/> */}
        <Footer data={this.state.data.main}/>
      </div>
    );
  }
}

export default App;
