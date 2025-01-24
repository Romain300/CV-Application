import "../styles/resume.css";
import profilPic from '../../public/unnamed.webp';

export function Resume() {

    return (

        <MainContainer/>


    )
};


function MainContainer() {

    return (

        <div className="main-container">
            <ImageProfil/>
            <NameProfil name="Arthur" surname="Morgan"/>
            <ContactSkillsEdu/>
            <ProfilWorkXp/>
        </div>

    );
};


function ImageProfil() {

    return (

        <img className="image-profil" src={profilPic} alt="image profile"/>

    );
};

function NameProfil({name, surname}) {

    return (

        <div className="profil-name">
            <div className="name">{name}</div>
            <div className="surname">{surname}</div>
        </div>

    );

};


function Contact({phone, address, email, linkedIn}) {

    return (

        <div className="contact">
            <div className="title">CONTACT</div>

            <div className="contact-info-div">

                <div className="info-title">Phone:</div>
                <div className="info">{phone}</div>

                <div className="info-title">Address:</div>
                <div className="info">{address}</div>

                <div className="info-title">Email:</div>
                <div className="info">{email}</div>

                <div className="info-title">Phone:</div>
                <div className="info">{linkedIn}</div>

            </div>
        </div>

    )
}


function ContactSkillsEdu() {

    return (

        <div className="contact-skills-edu">
            <Contact phone="04 32 234 789" address="Melbourne, Australia" email="youremail@gmail.com" linkedIn="linkedin/yourprofil.com"/>
            <Skills/>
            <Educations/>
        </div>

    );
};

function Skills() {

    let skillList = ["Html", "CSS", "JavaScript", "React", "Python", "Django", "Heroku", "AWS"]

    return (

        <div className="skills-div">
            <div className="title">SKILLS</div>
            <div className="skill-list">
                
                {skillList.map((skill) => <div key={[skill]} className="skill">{skill}</div>)}
                
            </div>

        </div>

    );

};


function Educations() {

    let educations = [

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

    ];

    return (

        <div className="educations-div">

            <div className="title">EDUCATIONS</div>

            <div className="education-list">

                {educations.map((edu) => {

                    return (

                        <div key={edu.id} className="edu">
                            <div className="edu-degree">{edu.degree}</div>
                            <div >{edu.school}</div>
                            <div >{edu.from} - {edu.to}</div>
                            <div >{edu.location}</div>
                        </div>

                    )

                })}

            </div>

        </div>

    )
};


function ProfilWorkXp() {

    return (

        <div className="profil-workxp">
            <Profil/>

        </div>

    )
}


function Profil() {

    return (
        
        <div className="profil">

            <div className="title">PROFILE</div>
            <div className="statement">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime exercitationem autem minus eos mollitia? Soluta veniam ipsa tempore officiis dolores adipisci optio exercitationem! Recusandae eos similique ipsam nesciunt veritatis!
            </div>
            
        </div>

    );
};


function WorkXp() {

    return (

        <div className="workxp">
            
        </div>


    )

}