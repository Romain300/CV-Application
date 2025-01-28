import { useState } from "react";
import '../styles/contact.css';
import { Textarea } from "./works";


//finish to release photo when change , better layout
function Contact({ onSave }) {

    const [profilPic, setProfilPic] = useState(null);

    const [save, setSave] = useState(false);

    const [formData, setFormData] = useState({
        name:"", 
        surname:"",
        tel:"",
        address:"",
        email:"",
        linkedin:"",
        statement: "",
        photo: "",
    });
    

    const handleInputChange = (event) => {

        const { id, value, files} = event.target;

        if (id === "photo" && files) {

            const file = files[0];

            if (profilPic) URL.revokeObjectURL(profilPic);

            const newProfilPic = URL.createObjectURL(file);

            setProfilPic(newProfilPic);

            setFormData((previousData) => ({...previousData, [id]: file }))


        } else {

            setFormData((previousData) => ({...previousData, [id]: value }))

        }


    };

    const handleSaveButton = () => {
        
        setSave((previousState) => (!previousState));

        if (!save && onSave) onSave(formData); 
        
    };

    return (
        <div className="form-container">

            <h2>Contact</h2>
            
            {!save && (

                <form>
                    <div className="info-tab">

                        <Input id="name" type="text" label="Name:" onChange={handleInputChange} value={formData["name"]}/>
                        <Input id="surname" type="text" label="Surname:" onChange={handleInputChange} value={formData["surname"]}/>
                        <Input id="tel" type="tel" label="Phone:" onChange={handleInputChange} value={formData["tel"]}/>
                        <Input id="address" type="text" label="Address:" onChange={handleInputChange} value={formData["address"]}/>
                        <Input id="email" type="email" label="Email:" onChange={handleInputChange} value={formData["email"]}/>
                        <Input id="linkedin" type="text" label="LinkedIn:" onChange={handleInputChange} value={formData["linkedin"]}/>
                        <Input id="photo" onChange={handleInputChange} type="file" label="Profile picture:" />
                        <Textarea id="statement" onChange={handleInputChange} value={formData["statement"]} label="Personal Statement:"/> 
                        
                        <Button type="button" onClick={handleSaveButton} content="Save" className="save-button"/>

                    </div>
                </form>

            )}

            {save && (

                <div className="info-tab">

                    <p><strong>Name:</strong> {formData["name"]}</p>
                    <p><strong>Surname:</strong> {formData["surname"]}</p>
                    <p><strong>Phone:</strong> {formData["tel"]}</p>
                    <p><strong>Address:</strong> {formData["address"]}</p>
                    <p><strong>Email:</strong> {formData["email"]}</p>
                    <p><strong>LinkedIn:</strong> {formData["linkedin"]}</p>
                    <div className="photo-saved">
                        <strong>Photo:</strong>
                            {formData["photo"] && (
                                <img 
                                className="profil-pic"
                                src={profilPic} 
                                alt="profil-pic"/>
                            )}
                    </div>
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

export default Contact;