import './App.css';
import Navbar from "./Navbar";
import AnimatedList from "./Animation";
import SkillsShowcase from "./SkillShare";
import ProjectShowcase from "./PersonalProject";
import ExperienceShowcase from "./Experience";
import HobbyShowcase from "./hobbies";


function App() {
    const data = [
        {
            title : "I am a software engineer",
            description : "I love to code, do you also love"
        },
        {
          title: "I am a photographer",
          description: "Previously i was bad it, but i learnt it with time"
        },
        {
            title: "I love ironman",
            description: "Do you also love ironman, if yes follow me"
        }
    ];

    return (
    <div className = "main-component">
      <Navbar/>
      <AnimatedList data={data}/>
        <SkillsShowcase/>
        <ProjectShowcase/>
        <ExperienceShowcase/>
        <HobbyShowcase/>
    </div>
  );
}

export default App;
