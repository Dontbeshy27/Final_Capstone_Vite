import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person1 from "../assets/products/person1.jpg"
import Person2 from "../assets/products/person2.jpg"
import styles from './about_us.css';

import { FacebookLogo } from 'phosphor-react';
import Footer from '../components/footer';

const AboutUs = () => {

  return (

    <section>
    <div className="container flow-content">
      <h2 className="section-title ">OUR TEAM</h2>
      <ul role="list" className="grid">
        {teamMembers.map((member, index) => (
          <li key={index}>
            <article className="card" data-visible="false">
              <div className="card__front flow-content">
                <img
                  className="card__img mx-auto"
                  src={member.imageSrc}
                 
                />
                <div
                  className={`flow-content ${styles["data-spacing-sm"]}`}
                  data-spacing="sm"
                >
                  <p className="card__name">{member.name}</p>
                  <p className="card__position">{member.position}</p>
                </div>
              </div>
              <div className="card__back flow-content">
                
                <p className="card__name">{member.bio}</p>
                <ul role="list" className="card__social flex-group">
                  <li>
                    <a href={member.facebookLink}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={member.linkedinLink}>
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
             
            </article>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
  </section>
  

  );
  
};

export default AboutUs;
const teamMembers = [
  
 
  {
    name: "Shaun Daniel Q, Dequilla",
    position: "Web Developer/Front-End Engineer",
    imageSrc: Person2,
    bio: "Hi, I am Shaun, your web developer and a software Engineer.",
    facebookLink: "https://m.me/micronomix",
    linkedinLink: "https://www.linkedin.com/in/mark-renier-mercado-2a6466268",
  },
  {
    name: "Edward M Pacheco",
    position: "Web Developer/Front-End Engineer",
    imageSrc: Person1,
    bio: "Hi, I am Edward, your web developer and a software Engineer.",
    facebookLink: "https://m.me/micronomix",
    linkedinLink: "https://www.linkedin.com/in/mark-renier-mercado-2a6466268",
  },
 
];
