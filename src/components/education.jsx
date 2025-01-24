import '../styles/education.css';
import { useState } from 'react';
import { Button, Input } from "./contact.jsx";
import addLogo from '../../public/add.svg';



export function Education() {

    const [eduData, setEduData] = useState([

        {
            id: crypto.randomUUID(),
            school: "",
            location: "",
            degree: "",
            from: "",
            to: "",

         }
    ])

    const addEdu = () => {

        setEduData((prev) => ([...prev, {

            id: crypto.randomUUID(),
            school: "",
            location: "",
            degree: "",
            from: "",
            to: "",

        }]))
    };

    const deleteEdu = (id) => {

        setEduData((prev) => (prev.filter((edu) => edu.id !== id)))

    }

    const updateEdu = (id, event) => {

        const newData = event.target.value;
        const idTarget = event.target.id.split("&")[1]; //splititng Id to match with the object 
        setEduData((prev) => (prev.map((edu) => edu.id === id ? {...edu, [idTarget]: newData} : edu)));
 
    };

    return (
        <div className="form-container">

            <div className="section-header">
                <h2>Education</h2>
                <button type='button' className='add-button' onClick={addEdu} >
                    <img width="25rem"  src={addLogo} alt='add logo'/>
                </button>
            </div>

            {eduData.map((edu) => <EducationData edu={edu} key={edu.id} id={edu["id"]} deleteEdu={deleteEdu} updateEdu={updateEdu}/>)}

        </div>
    )

}


function EducationData({id, deleteEdu, updateEdu, edu}) {

    const [save, setSave] = useState(false);

    const toggleSave = () => {

        setSave((prev) => (!prev));

    };

    const handleInputChange = (event) => {

        updateEdu(id, event);

    };

    return(

        <div>

            {!save &&

                <form onSubmit={(event) => event.preventDefault()}>

                    <div className='info-tab'>

                        <Input id={`${id}&school`} type="text" value={edu["school"]} label="School/Uni:" onChange={handleInputChange}/>
                        <Input id={`${id}&location`} type="text" value={edu["location"]} label="Location:" onChange={handleInputChange}/>
                        <Input id={`${id}&degree`} type="text" value={edu["degree"]} label="Degree/Certificate:" onChange={handleInputChange}/>
                        <div className='date-education-job'>
                            <Input id={`${id}&from`} type="month" value={edu["from"]} label="From:" onChange={handleInputChange}/>
                            <Input id={`${id}&to`} type="month" value={edu["to"]} label="To:" onChange={handleInputChange}/>
                        </div>
                        <div className="delete-save-div">
                            <Button type="button" content="Save" onClick={toggleSave} className="save-button" />
                            <Button type="button" content="Delete"  className="delete-button" onClick={() => deleteEdu(id)}/>
                        </div>

                    </div>

                </form>
            
            }

            {save && 

                <div className='info-tab'>
                    <p><strong>School/Uni:</strong> {edu.school}</p>
                    <p><strong>Location:</strong> {edu.location}</p>
                    <p><strong>Degree/Certificate:</strong> {edu.degree}</p>
                    <p><strong>From:</strong> {edu.from}</p>
                    <p><strong>To:</strong> {edu.to}</p>
                    <div className="delete-edit-div">
                        <Button type="button" content="Delete" className="delete-button" onClick={() => deleteEdu(id)}/>
                        <Button type="button" content="Edit"  className="edit-button" onClick={toggleSave}/>
                    </div>
                </div>

            
            }

        </div>

    
    )
}

