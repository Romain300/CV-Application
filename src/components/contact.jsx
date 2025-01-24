import { useState } from "react";
import '../styles/contact.css';
import { Textarea } from "./works";

export function Contact() {
    const [save, setSave] = useState(false);

    const [formData, setFormData] = useState({
        name:"", 
        tel:"",
        address:"",
        email:"",
        linkedin:"",
        statement: "",
    });

    const handleInputChange = (event) => {

        const { id, value } = event.target;
        setFormData((previousData) => ({...previousData, [id]: value}))

    }

    const handleSaveButton = () => {
        
        setSave((previousState) => (!previousState));
    }

    return (
        <div className="form-container">

            <h2>Contact</h2>
            
            {!save && (

                <form>
                    <div className="info-tab">

                        <Input id="tel" type="tel" label="Phone:" onChange={handleInputChange} value={formData["tel"]}/>
                        <Input id="address" type="text" label="Address:" onChange={handleInputChange} value={formData["address"]}/>
                        <Input id="email" type="email" label="Email:" onChange={handleInputChange} value={formData["email"]}/>
                        <Input id="linkedin" type="text" label="LinkedIn:" onChange={handleInputChange} value={formData["linkedin"]}/>
                        <Textarea id="statement" onChange={handleInputChange} value={formData["statement"]} label="Personal Statement:"/> 

                        <Button type="button" onClick={handleSaveButton} content="Save" className="save-button"/>

                    </div>
                </form>

            )}

            {save && (

                <div className="info-tab">

                    <p><strong>Phone:</strong> {formData["tel"]}</p>
                    <p><strong>Address:</strong> {formData["address"]}</p>
                    <p><strong>Email:</strong> {formData["email"]}</p>
                    <p><strong>LinkedIn:</strong> {formData["linkedin"]}</p>
                    <p><strong>Statement:</strong> {formData["statement"]}</p>

                    <Button type="button" onClick={handleSaveButton} content="Edit" className="edit-button"/>

                </div>
 
            )}

            
        </div>
        
    )


}


export function Input({ label, type, id, onChange, value, }) {
    
    return (
        <div className="input-contact">
            <label htmlFor={id}>
                { label }
            </label>
            <input id={id} type={type} onChange={onChange} value={value} placeholder={`Enter your ${label}`}/>
        </div>
        
    );

};


export function Button({ type, content, className, onClick }) {
    return (
        <div className="button-div">
            <button onClick={onClick} className={className} type={type}>{content}</button>
        </div>
        
    )
        
}

export function Data({label, content}) {
    return (
        <div className="input-contact">
            <div>{ label }</div>
            <div className="contact-info">{ content }</div>
        </div>
    );
};



