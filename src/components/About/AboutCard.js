import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { user } from "../../Assets/ResumeData"
function AboutCard() {

 

return (
  <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">{user.fname} {user.lname} </span>
          from <span className="purple"> Gurgaon, India.</span>
          <br />I am a senior pursuing {user.cource} in {user.stream} from t{user.college}.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
        {
          user.hobbies.map((hobby)=>(
            <li className="about-activity">
            <ImPointRight /> {hobby}
          </li>
          ))
        }
  
        </ul>

        <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">{user.fname}</footer>
      </blockquote>
    </Card.Body>
  </Card>
);
}

export default AboutCard;
