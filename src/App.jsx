import Contact from "./components/contact";
import Skills from "./components/skills";
import Education from "./components/education";
import Resume from "./components/resume";
import Works from "./components/works";
import "./styles/informations.css";
import { useState } from "react";

function App() {

  const [contact, setContact] = useState(

    {

      surname:"Morgan",
      name:"Arthur", 
      tel:"0432167456",
      address:"Sydney, Australia",
      email:"youremail@gmail.com",
      linkedIn:"your/linkedIn.com",
      statement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime exercitationem autem minus eos mollitia? Soluta veniam ipsa tempore officiis dolores adipisci optio exercitationem! Recusandae eos similique ipsam nesciunt veritatis!",  
    }

  );

  const [skills, setSkills] = useState([

    {id: crypto.randomUUID(), skill: "Html"},
    {id: crypto.randomUUID(), skill: "CSS"},
    {id: crypto.randomUUID(), skill: "Javascript"},
    {id: crypto.randomUUID(), skill: "React"},
    {id: crypto.randomUUID(), skill: "Pyhton"},
    {id: crypto.randomUUID(), skill: "Django"},
    {id: crypto.randomUUID(), skill: "Heroku"},
    {id: crypto.randomUUID(), skill: "AWS"},

  ])

  const [education, setEducation] = useState([

    {
      id: crypto.randomUUID(),
      school: "University of Versailles",
      location: "Versailles (France)",
      degree: "Bachelor of Mathematics",
      from: "2014",
      to: "2017",
    },

    {
      id: crypto.randomUUID(),
      school: "Financia Business School",
      location: "Paris (France)",
      degree: "Master Degree of Corporate Finance",
      from: "2019",
      to: "2021",
    },


  ])

  const [works, setWorks] = useState([

    {

      id: crypto.randomUUID(),
      compagny: "BNPP",
      location: "Paris (Fance)",
      position: "Accountant",
      from: "2019",
      to: "2021",
      tasks: [
          
        {idTask: crypto.randomUUID(), task: "Lorem, adipisicing elit. Incidunt illo est placeat deserunt sed aliquam a doloribus unde temporibus earum commodi magnam aut accusantium rem nemo, officia eum quo voluptates!"},
        {idTask: crypto.randomUUID(), task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur illo ratione tenetur officia consequatur, nostrum fuga optio animi molestias ipsum quisquam ducimus deleniti dolore iusto illum eveniet magnam quos?"},
        {idTask: crypto.randomUUID(), task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur illo ratione tenetur officia consequatur, nostrum fuga optio animi molestias ipsum quisquam ducimus deleniti dolore iusto illum eveniet magnam quos?"},

      ],

    },
    
    {

      id: crypto.randomUUID(),
      compagny: "Commonwealth Bank",
      location: "Sydney (Australia)",
      position: "Financial Controller",
      from: "2022",
      to: "2024",
      tasks: [
          
        {idTask: crypto.randomUUID(), task: "Lorem, adipisicing elit. Incidunt illo est placeat deserunt sed aliquam a doloribus unde temporibus earum commodi magnam aut accusantium rem nemo, officia eum quo voluptates!"},
        {idTask: crypto.randomUUID(), task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur illo ratione tenetur officia consequatur, nostrum fuga optio animi molestias ipsum quisquam ducimus deleniti dolore iusto illum eveniet magnam quos?"},
        {idTask: crypto.randomUUID(), task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur illo ratione tenetur officia consequatur, nostrum fuga optio animi molestias ipsum quisquam ducimus deleniti dolore iusto illum eveniet magnam quos?"},

      ],

    },

  ]);

  const saveContact = (formContact) => {

    setContact(formContact);

  };

  const saveSkills = (skillList) => {

    setSkills(skillList);

  };

  const saveEducation = (eduList) => {

    setEducation(eduList);

  };

  const saveWorks = (workList) => {

    setWorks(workList);

  };


  return (

    <main>

      <div>
        <Contact onSave={saveContact}/>
        <Skills onSave={saveSkills}/>
        <Education onSave={saveEducation}/>
        <Works onSave = {saveWorks}/>
      </div>
      <div>
        <Resume contact={contact} skills={skills} education={education} works={works}/>
      </div>

    </main>
    
  );
  
};

export default App
