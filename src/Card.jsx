import React from 'react';
import img from "../src/Images/jay.jpg";
import{NavLink} from 'react-router-dom' 
import {Link} from 'react-router-dom';
import  '../src/Style/card.scss';



const Card = (props) => {
  return (
                  <div className="card">
                    <img src={props.imgsrc} className="card background" alt={props.imgsrc}/>
                     <img src={props.imgsrc}  alt="card background" className="profile-img" />
                        <h5 className="card-title font-weight-bold" >{props.title}</h5>
                       <p className="profile-about">Hello </p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <ul className="social-media">
                <li><Link to="/home"><i className="fab fa-facebook-square"></i></Link></li>
                <li><Link to="/home"><i className="fab fa-twitter-square"></i></Link></li>
                <li><Link to="/home"><i className="fab fa-instagram"></i></Link></li>
                <li><Link to="/home"><i className="fab fa-linkedin-in"></i></Link></li>

            </ul>
                    </div>
                 

             
      )
    }
    export default Card


//     import React from 'react'
// import user  from '../assets/img/jay.jpg'
// import cardImage from '../assets//img/service-section.jpeg'
// import {Link} from 'react-router-dom';
// import './TeamCard.scss';

// const TeamCard = (props) => {
//     console.log(props)
//         let teamData = props || []
//         // if (teamData.length && teamData[3].teamMembers) {
//         //   this.setState({ props: teamData[3].teamMembers })

        
//     return (
//         <div className="card">
//             <img src={cardImage} alt="card background" className="card-img" />
//             <img src={user} alt="profile" className="profile-img" />
//             <h1>{props.data.name}</h1>
//             <p className="job-title">{props.data.designation}</p>
//             <p className="profile-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, repellendus. </p>
//             <a className="btn-contact">Contact</a>
//             <ul className="social-media">
//                 <li><Link to="/home"><i className="fab fa-facebook-square"></i></Link></li>
//                 <li><Link to="/home"><i className="fab fa-twitter-square"></i></Link></li>
//                 <li><Link to="/home"><i className="fab fa-instagram"></i></Link></li>
//                 <li><Link to="/home"><i className="fab fa-linkedin-in"></i></Link></li>

//             </ul>
//         </div>
//     )
// }

// export default TeamCard
