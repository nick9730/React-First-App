import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
      
       <SkillList/>


      </div>
    </div>
  );
}
function Avatar(){
  return(
    <div >

      <img className="avatar"  src="photo.jpg"/>
    </div>
    );
}

function Intro(){
  return(
    <div className="data" >

      <h1>KOytrenis NIkos</h1>
      <p>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.</p>
    </div>
  );
}


function SkillList(){
 const varietySkills = skills

  return(
    <div className="skill-list">
    {varietySkills.map((skill)=>(<Skill list ={skill} varietySkills={skill.skill} color = {skill.color} level = {skill.level} key={skill.skill} />))}
    </div>
  )
}

function Skill( {list , varietySkills , color , level}){
return(<div className="skill" style={{backgroundColor : color}}>
      <p>{varietySkills}</p>
      
         <span>{level === 'beginner'? (list.emoji="👶") :level === 'advanced' ?  list.emoji='sad' : (list.emoji='gappy')} </span>
   

  </div>
);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
