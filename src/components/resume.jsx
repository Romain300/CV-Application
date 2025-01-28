import "../styles/resume.css";


function Resume({contact, skills, education, works, printref}) {

    return (

        <div ref={printref} className="main-container">
            <ImageProfil image={contact.photo}/>
            <NameProfil name={contact.name} surname={contact.surname}/>
            <ContactSkillsEdu contact={contact} skills={skills} education={education}/>
            <ProfilWorkXp profile={contact.statement} works={works}/>
        </div>

    );
};


function ImageProfil({ image }) {

    let isFile = false;

    if( image instanceof File ) isFile = true;

    return (

        <>

            {isFile && (

            <img className="image-profil" src={URL.createObjectURL(image)} alt="image profile"/>

            )}

            {!isFile && (

            <img className="image-profil" src={image} alt="image profile"/>

            )}


        </>

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


function Contact({contact}) {

    return (

        <div className="contact">
            <div className="title">CONTACT</div>

            <div className="contact-info-div">

                <div className="info-title">Phone:</div>
                <div className="info">{contact.tel}</div>

                <div className="info-title">Address:</div>
                <div className="info">{contact.address}</div>

                <div className="info-title">Email:</div>
                <div className="info">{contact.email}</div>

                <div className="info-title">LinkedIn:</div>
                <div className="info">{contact.linkedIn}</div>

            </div>
        </div>

    )
}


function ContactSkillsEdu({contact, skills, education}) {

    return (

        <div className="contact-skills-edu">
            <Contact contact={contact}/>
            <Skills skills={skills}/>
            <Educations education={education}/>
        </div>

    );
};

function Skills({skills}) {

    return (

        <div className="skills-div">
            <div className="title">SKILLS</div>
            <div className="skill-list">
                
                {skills.map((skill) => <div key={skill.id} className="skill">{skill.skill}</div>)}
                
            </div>

        </div>

    );

};


function Educations({education}) {

    return (

        <div className="educations-div">

            <div className="title">EDUCATIONS</div>

            <div className="education-list">

                {education.map((edu) => {

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


function ProfilWorkXp({profile, works}) {

    return (

        <div className="profil-workxp">
            <Profil profile={profile}/>
            <WorkXp works={works}/>
        </div>

    )
}


function Profil({profile}) {

    return (
        
        <div className="profil">

            <div className="title">PROFILE</div>
            <div className="statement">{profile}</div>
            
        </div>

    );
};


function WorkXp({works}) {

    return (

        <div className="workxp">
            <div className="title">WORK EXPERIENCE</div>
            
            <div className="work-list">
                {works.map((work) => {
                    return (

                        <div key={work.id} className="work">
                            <div className="work-position">{work.position}</div>
                            <div className="info-work">{work.compagny} / {work.location} / {work.from}-{work.to}</div>
                            <ul className="task-list">
                                {work.tasks.map((task) => <li key={task.idTask}>{task.task}</li>)}
                            </ul>
                        </div>
                        
                    )
                })}

            </div>
            
        </div>

    )

};

export default Resume;