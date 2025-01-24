import '../styles/skills.css';
import { useState } from 'react';
import { Button, Input } from "./contact.jsx"
import addLogo from '../../public/add.svg'


export function Skills() {

    const [skillList, setSkillList] = useState([

        {id: crypto.randomUUID(), data: ""},
    ])

    const addSkill = () => {

        setSkillList((previousState) => [...previousState, {id: crypto.randomUUID(), data: ""}])

    }

    const updateSkill = (id, newData) => {

        setSkillList((previousState) => {

            return previousState.map((skill) => skill.id === id ? {...skill, data: newData} : skill ) 
            
        })
    }

    const deleteSkill = (id) => {
        
        setSkillList((previousState) => previousState.filter((skill) => skill.id !== id));

    };

    return (

        <div className="form-container">

            <div className="section-header">
                <h2>Skills</h2>
                <button className='add-button' onClick={addSkill}>
                    <img width="25rem"  src={addLogo} alt='add logo'/>
                </button>
            </div>

            
            {skillList.map((skill) => <DataSkills skillData={skill.data} key={skill.id} id={skill.id} deleteSkill={deleteSkill} updateSkill={updateSkill}/>)}

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

        setSave((previousState) => (!previousState));

        if (save) updateSkill(id, data)
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
}


