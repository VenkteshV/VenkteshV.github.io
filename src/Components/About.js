import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var about = this.props.data.about;
         console.log("about", about)
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
         var contactMessage = this.props.data.contactmessage;
         var categories = this.props.data.categories.map(function (work) {
            return <li>
               <span className="categoryTitle">{work.name}</span>: {work.description}

            </li>

         })

      }

      return (
         <div>
            <section id="about">
               <div className="row">
                  <div className="three columns">
                     <img className="profile-pic" src={profilepic} alt="Delft profile Pic" />
                  </div>
                  <div className="nine columns main-col">
                     <h2>Background</h2>
                     <p>{about}</p>




                  </div>
               </div>

            </section>
            <section id ="location">
            <div className="row">
                  <div className="three columns">
                  </div>
                  <div className="nine columns main-col">
                     <h2>Location</h2>
                     <p> Next Delft
            Molengraaffsingel 8
            2629 JD Delft</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9827.087708182778!2d4.3850773!3d51.9928105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5ae113b6a2b%3A0xed126b0c7b0fb5d2!2sMondai%20%7C%20House%20of%20AI!5e0!3m2!1snl!2snl!4v1700813457363!5m2!1snl!2snl" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
               </div>
            </section>
            <section id="registration">
            <div className="row">
                  <div className="three columns">
                  </div>
                  <div className="nine columns main-col">
               <h2>Registrations now open at: </h2> <a href="https://www.eventbrite.com/e/21st-dutch-belgian-information-retrieval-workshop-tickets-732843262927?aff=oddtdtcreator">Click here to register at eventbrite</a>
            </div>
            </div>

            </section>
            <section id="call">
               <div className="row">
                  <div className="three columns">
                  </div>
                  <div className="nine columns main-col">

                     <h2>Present Your Work</h2>
                     <p>{bio}</p>

                     <p className="cat"><ol>{categories}</ol></p>
                     <p>Please submit your <b style={{ color: 'white', fontweight: 700, fontSize: 25 }}>contributions</b> by submitting the form <a style={{ color: 'white', fontSize: 25, fontweight: 700 }} href="https://tudelft.fra1.qualtrics.com/jfe/form/SV_bpVNFS6uxPIijki">here</a></p>
                     <p>{contactMessage}</p>
                     <h2>Important dates</h2>
                     <p>

                        Nominate your contribution by: <strong style={{ color: 'white', fontweight: 700 }}>October 23, 2023 </strong><br />

                        Notification of contributions to spotlight during DIR 2023: <b style={{ color: 'white', fontweight: 700 }}>October 30, 2023</b>  <br />

                        DIR 2023: <b style={{ color: 'white', fontweight: 700 }}>November 27, 2023</b>
                     </p>
                  </div>
               </div>
            </section >

         </div >


      );
   }
}

export default About;
