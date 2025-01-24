import { Contact } from "./contact";
import { Skills } from "./skills";
import { Education } from "./education";
import { Works } from "./works";
import "../styles/informations.css";

function InfoDiv() {
    
    return (
        <div className="container">
            <Contact/>
            <Skills/>
            <Education/>
            <Works/>
        </div>
    )
}


export default InfoDiv;