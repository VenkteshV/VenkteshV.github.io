import React, { Component } from 'react';

class Resume extends Component {
   render() {

      if (this.props.data) {
         console.log("address", this.props)
         var street = this.props.address.address.street;
         var name = this.props.address.name;
         var city = this.props.address.address.city;
         var state = this.props.address.address.state;
         var zip = this.props.address.address.zip;
         var phone = this.props.address.phone;
         var email = this.props.address.email;
         var skillmessage = this.props.data.skillmessage;
         var sponsors = this.props.data.sponsors.map(function (sponsor) {
            return <div key={sponsor.name} className="columns portfolio-item">
               <div className="item-wrap">
                  <img alt={sponsor.name} src={'images/portfolio/' + sponsor.image} />

               </div>
            </div>

         })
         var schedule = this.props.data.work.map(function (work) {
            return <div>

               <br />
               <div class="panel panel-primary">
                  <div class="panel-heading">{work.title}</div>

                  <div class="panel-body" dangerouslySetInnerHTML={{ __html: work.description }}></div>


               </div>

            </div>
         })
         // var skills = this.props.data.students.map(function(student){
         //   // var className = 'bar-expand '+skills.name.toLowerCase();
         //   return <li key={student.name}><em>{student.name}</em><div className="information">Topic: {student.topic}</div></li>
         // })
         // var publication = this.props.data.publications.map(function(publication){
         //   // var className = 'bar-expand '+skills.name.toLowerCase();
         //   return <li className="skills publications" key={publication.publication}><em>{publication.publication}</em><div className="information"><b>Authors:</b> {publication.authors} <span><a href={publication.link}> Paper Link</a></span></div>
         //   <div className="conference">{publication.conference}</div>
         //   </li>
         // })
         var team = this.props.data.team.map(function (member) {
            // var className = 'bar-expand '+skills.name.toLowerCase();
            return <div><span>{member.title}</span> <br /></div>
         })
      }

      return (
         <div>
            <section id="schedule">
               <div className="row schedule">

                  <div className="three columns header-col">
                     <h1><span> Schedule</span></h1>
                  </div>

                  <div className="nine columns main-col">
                     {schedule}
                  </div>
               </div>
            </section>
            <section id="keynote">  
            <div className="row">

            <div className="three columns header-col">
      
                <h1><span> Keynote</span></h1>
                </div>
                <div className="nine columns main-col">
                     <h1>Information Retrieval in the age of LLMs</h1>
                     <p>''In this talk I will discuss the relationship between Information Retrieval (IR) and Large Language Models (LLMs). Generative LLMs can help IR with data augmentation, query rewriting, summarisation, or even directly be used to generate document ids in ranking. Vice versa, IR helps LLMs with source retrieval in retrieval-augmented generation. But IR has more to offer. IR is a user-oriented field: we want to help users solve a problem. We think critically about evaluation metrics and multiple dimensions of evaluation: we do not only care about relevance but also about diversity, bias, and explainability. In chatbots, IR can help the reliability and trustworthiness of the returned information. I will talk about these opportunities and call for a central role of IR in the realm of LLMs."</p>
                     <h1>Short Bio</h1>
                     <img src="images/portfolio/keynote.jpeg"></img>
                     <p>Suzan Verberne is professor of Natural Language Processing (NLP) in the Leiden Institute of Advanced Computer Science at Leiden University. She obtained her PhD in 2010 on the topic of Question Answering and has since then been working on the edge between NLP and Information Retrieval (IR). She has supervised projects involving a large number of application domains: from social media to law and from archaeology to health. Her research focus is to advance NLP "beyond the benchmark", addressing challenging problems in specific domains. This involves the development of Large Language Models for low-resource settings, and addressing issues related to misinformation, transparency, and bias. Suzan is active in the NLP and IR communities. Notably, she is co-chair of the SIGIR Virtual Forum initiative, and Diversity-Equity-Inclusivity (DEI) co-chair for the worldwide SIGIR organisation.
                     <a href="https://liacs.leidenuniv.nl/~verbernes/">https://liacs.leidenuniv.nl/~verbernes/</a></p>
                  </div>
                  </div>

               
            </section>

            <section id="diversity">  
            <div className="row">

            <div className="three columns header-col">
      
                <h1><span> Diversity Session</span></h1>
                </div>
                <div className="nine columns main-col">
                     <h1>On relevance <h2>(Slides at : <a href="https://www.dropbox.com/scl/fi/hlqwi93x5l299bv50h5jx/DIR_Diversity_OnRelevance_Liem.pdf?rlkey=cl2npvrbsusiy8tabc7ynycep&dl=0"> Here)</a></h2></h1>
                     <p>The concept of 'relevance' is essential to much work in IR. It grounds what will be successful to human users, and what thus needs to be prioritized.However, when striving for diversity, one may need to look beyond that what traditionally has been deemed relevant. As for this, in my talk, I will give several examples of ways in which I pursued routes in my career that at first sight would be deemed irrelevant or even irrational, but that to me were essential in ensuring that broader perspectives are identified, heard, and kept within reach."</p>
                     <h1>Short Bio</h1>
                     <img className="diversity" src="images/diversity.jpg"></img>
                     <p>Dr Cynthia C. S. Liem MMus is an Associate Professor in the Multimedia Computing Group of Delft University of Technology, and pianist of the Magma Duo. Her research interests are in trustworthy and responsible AI; here, she especially focuses on techniques that make people discover new interests and content which would not trivially be retrieved, and questions of validation and validity in data-driven decision-making. After starting in music information retrieval, today, her research considers broader public-interest domains with high societal impact. She initiated and co-coordinated multiple European research projects on technological enrichment of digital musical heritage, and gained industrial experience at Bell Labs Netherlands, Philips Research and Google.

Cynthia received recognition through multiple awards (Lucent Global Science and Google Anita Borg Europe Memorial scholarships, Google European Doctoral Fellowship, finalist of the New Scientist Science Talent Award, Researcher-in-Residence at the National Library of The Netherlands), is a member of the Dutch national Young Academy, and still performs as a musician. With her track record in inter- and transdisciplinary collaborative research and public engagement, she became a sought-after educator and communicator, and is a core team member of TU Delft | The Hague, seeking to better connect engineering expertise to policymaking.
</p>
                  </div>
                  </div>

               
            </section>
            <div className="row education">
               <div className="three columns header-col">
                  <h1><span>Sponsors</span></h1>
               </div>

               <div className="twelve columns collapsed">
                  <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                     {sponsors}
                  </div>
               </div>
            </div>







            <section id="team">
               <div className="row team">
                  <div className="three columns header-col">
                     <h1><span>Team</span></h1>
                  </div>
                  <div className="nine columns main-col">
                     <div className="twelve columns">
                        {team}
                     </div>
                  </div>

               </div>


            </section>
            <section id="contact">

               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                           {city} {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  {/* <div className="columns download">
         <p>
            <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
         </p>
      </div> */}
               </div>
            </section>
         </div >

      );
   }
}

export default Resume;
