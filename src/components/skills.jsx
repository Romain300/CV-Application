import '../styles/skills.css';
import { useState } from 'react';
import { Button, Input } from "./contact.jsx"
import addLogo from '../../public/add.svg'


function Skills({ onSave }) {

    const [skillList, setSkillList] = useState([

        {id: crypto.randomUUID(), skill: ""},
    ])

    const addSkill = () => {
        
        const updatedList = [...skillList, { id: crypto.randomUUID(), skill: "" }];

        setSkillList(updatedList); 

        if (onSave) onSave(updatedList); 
        
                
    };

    
    const updateSkill = (id, newData) => {

        const updatedList = skillList.map((skill) => skill.id === id ? {...skill, skill: newData} : skill );

        setSkillList(updatedList); 

        if (onSave) onSave(updatedList); 
          
    };

    const deleteSkill = (id) => {
        
        const updatedList = skillList.filter((skill) => skill.id !== id);

        setSkillList(updatedList); 

        if (onSave) onSave(updatedList); 
   
    };

    return (

        <div className="form-container">

            <div className="section-header">
                <h2>Skills</h2>
                <button className='add-button' onClick={addSkill}>
                    <img width="25rem"  src={addLogo} alt='add logo'/>
                </button>
            </div>

            
            {skillList.map((skill) => <DataSkills skillData={skill.skill} key={skill.id} id={skill.id} deleteSkill={deleteSkill} updateSkill={updateSkill}/>)}

        </div>
    )
}


function DataSkills({deleteSkill, id, skillData, updateSkill}) {

    const [save, setSave] = useState(false);
    const [data, setData] = useState(skillData);

    const handleInput = (event) => {

        setData(event.target.value);

    };

    const toggleSave = () => {

        setSave((prev) => {

            const newSaveState = !prev;

            if(newSaveState) updateSkill(id, data);
            
            return newSaveState;

        });

    };
    
    return (

        <div>

            {!save && (

            <form onSubmit={(event) => event.preventDefault()}>
                <div className="info-tab">
                    <Input  label={"New skill"} type="text" value={data} onChange={handleInput}/>
                    <div className="delete-save-div">
                        <Button type="button" content="Save" className="save-button" onClick={toggleSave}/>
                        <Button type="button" content="Delete" onClick={() => deleteSkill(id)} className="delete-button"/>
                    </div>
                </div>
            </form>

            )}

            {save && (

            <div className="info-tab">
                <div>{ data }</div>
                <div className="delete-edit-div">
                    <Button type="button" content="Delete" onClick={() => deleteSkill(id)} className="delete-button"/>
                    <Button type="button" content="Edit"  className="edit-button" onClick={toggleSave}/>
                </div>
            </div>

            )}

        </div>

    )
};

export default Skills;


