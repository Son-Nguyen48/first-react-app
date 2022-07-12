import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/css/style.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const Header = (
  <header>
    <img
      src="https://github.com/Asabeneh/30-Days-Of-React/blob/master/images/frontend_technologies.png?raw=true"
      alt="Tech Stack"
    />
  </header>
);

const Hero = (
  <div id="hero">
    <h1>SUBSCRIBE</h1>
    <p>Sign up your with your email address to receive news and updates</p>
    <form>
      <input type="text" key="firstName" placeholder="First name" />
      <input type="text" key="lastName" placeholder="Last name" />
      <input type="text" key="email" placeholder="Email" />
    </form>
  </div>
);

const techs = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongDB",
  "Python",
  "Flask",
  "Django",
  "Numpy",
  "Pandas",
  "Data Analysis",
  "MySQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git"
];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

const Card = (
  <div id="card">
    <img
      className="card__profile-img"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
      alt="blank"
    />
    <div id="card__author">
      <div className="card__author-name">
        <h2>Steve Jobs</h2>
        <img
          className="card__author-certification"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
          alt="blank"
        />
      </div>
      <p className="card__author-title">CEO of Apple Company</p>
    </div>
    <div className="card__skills">
      <ul>{techsFormatted}</ul>
    </div>
  </div>
);

root.render([Header, Hero, Card]);
