import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">VenkteshV</a></li>
            <li><a className="smoothscroll" href="#about">Background</a></li>
            <li><a className="smoothscroll" href="#location">Research Topics</a></li>

            <li><a className="smoothscroll" href="#registration">Teaching and Mentorship</a></li>

            <li><a className="smoothscroll" href="#call">CV</a></li>

            <li><a className="smoothscroll" href="#schedule">Publications</a></li>
            <li><a className="smoothscroll" href="#keynote">Current Supervision</a></li>
            <li><a className="smoothscroll" href="#diversity">Diversity Session</a></li>

            <li><a className="smoothscroll" href="#contact">Contact</a></li>

            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h5 className="responsive-headline">{name}</h5>
            <h5 className="title"> <span>{occupation}</span>.</h5>
            <h5 className="title"> <span>{description}</span></h5>

            <hr />
            <ul className="social-links">
              {networks}
           </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
