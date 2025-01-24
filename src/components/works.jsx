import '../styles/works.css';
import { useState } from 'react';
import { Button, Input } from "./contact.jsx";
import addLogo from '../../public/add.svg';

export function Works() {

    const [works, setWorks] = useState([

        {   
            id: crypto.randomUUID(),
            compagny: "",
            location: "",
            position: "",
            from: "",
            to: "",
            tasks: [{idTask: crypto.randomUUID(), task: ""}],

        }
    ]);

    const addWork = () => {

        setWorks((prev) => ([...prev, {

            id: crypto.randomUUID(),
            compagny: "",
            location: "",
            position: "",
            from: "",
            to: "",
            tasks: [{idTask: crypto.randomUUID(), task: ""}],

        }]))
    };

    const deleteWork = (id) => {

        setWorks((prev) => (prev.filter((work) => work.id !== id)))

    };

    const updateWork = (id, event) => {

        const newData = event.target.value;
        const idTarget = event.target.id.split("&")[1]; //splititng Id to match with the object 
        setWorks((prev) => (prev.map((work) => work.id === id ? {...work, [idTarget]: newData}: work)))

    };



    return (
        <div className="form-container">

            <div className="section-header">
                <h2>Work Experience</h2>
                <button className='add-button' onClick={addWork}>
                    <img width="25rem"  src={addLogo} alt='add logo'/>
                </button>
            </div>

            {works.map((work) => <WorkExp key={work.id} work={work} id={work.id} deleteWork={deleteWork} updateWork={updateWork}/>)}

        </div>
    )

}


function WorkExp({id, deleteWork, updateWork, work}) {

    const [save, SetSave] = useState(false);

    const toggleSave = () => {

        SetSave((prev) => (!prev));

    }

    const handleInputChange = (event) => {

        updateWork(id, event);

    }

    const deleteTask = (idTask) => {

        const updatedTasks =  work.tasks.filter((task) => (task.idTask !== idTask));
        updateWork(id, {target: {id: "&tasks", value:  updatedTasks}});

    }

    const addTask = () => {

        const updatedTasks = [...work.tasks, {idTask: crypto.randomUUID(), task: ""}];
        updateWork(id, {target: {id: "&tasks", value:  updatedTasks}});
    }

    const updateTask = (idTask, event) => {

        const newData = event.target.value;
        const updatedTasks = work.tasks.map((task) => task.idTask === idTask ? {...task, task: newData } : task);
        updateWork(id, {target: {id: "&tasks", value:  updatedTasks}});

    }

    
    return (

        <div>

            {!save && (

                <form>
                    <div className='info-tab'>

                        <Input id={`${id}&compagny`} value={work.compagny} type="text"  label="Compagny:" onChange={(event) => (updateWork(id, event))}/>
                        <Input id={`${id}&location`} value={work.location} type="text"  label="Location:" onChange={(event) => (updateWork(id, event))}/>
                        <Input id={`${id}&position`} value={work.position} type="text"  label="Job Position:" onChange={(event) => (updateWork(id, event))}/>

                        <div>

                            <div className="section-header">
                                <h4>Tasks:</h4>
                                <button type="button" className='add-button' onClick={addTask}>
                                    <img width="15rem"  src={addLogo} alt='add logo'/>
                                </button>
                            </div>

                            {work.tasks.map((task) => <TaskData task={task.task} key={task.idTask} id={task.idTask} deleteTask={deleteTask} updateTask={updateTask}/>)}

                        </div>

                        
                        <div className='date-education-job'>
                            <Input id={`${id}&from`} value={work.from} type="month"  label="From:" onChange={handleInputChange}/>
                            <Input id={`${id}&to`} value={work.to} type="month"  label="To:" onChange={(event) => (updateWork(id, event))}/>
                        </div>
                        <div className="delete-save-div">
                            <Button type="button" content="Save"  className="save-button" onClick={toggleSave}/>
                            <Button type="button" content="Delete"  className="delete-button" onClick={() => deleteWork(id)}/>
                        </div>


                    </div>
                </form>

            )}

            {save && (

                <div className='info-tab'>
                <p><strong>Compagny:</strong> {work.compagny}</p>
                <p><strong>Location:</strong> {work.location}</p>
                <p><strong>Job Position:</strong> {work.position}</p>
                <div><strong>Tasks:</strong>
                <ul>
                    {work.tasks.map((task) => <li key={task.idTask}>{task.task}</li>)}
                </ul>
                </div>
                <p><strong>From:</strong> {work.from}</p>
                <p><strong>To:</strong> {work.to}</p>
                <div className="delete-edit-div">
                    <Button type="button" content="Delete" className="delete-button" onClick={() => (deleteWork(id))}/>
                    <Button type="button" content="Edit"  className="edit-button" onClick={toggleSave}/>
                </div>
                </div>

            )}

        </div>

    );

}


function TaskData({id, task, deleteTask, updateTask}) {

    const handleInputChange = (event) => {

        updateTask(id, event)

    };

    return (
        
        <div className="info-tab">
            <Textarea onChange={handleInputChange} key={id} value={task} id={id} label="Task:" /> 
            <div className="delete-save-div-task">
                <Button type="button" content="Delete"  className="delete-task" onClick={() => deleteTask(id)}/>
            </div>
        </div>
                
    );

};


export function Textarea({label, id, onChange, value}) {

    return (

        <div className="input-contact">
            <label htmlFor={id}>
                { label }
            </label>
            <textarea id={id} onChange={onChange} value={value} placeholder={`Enter your ${label}`}></textarea>
        </div>

    )
}