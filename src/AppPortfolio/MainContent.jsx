import Education from "./Education";
import Skill from "./Skill";
import WorkExperience from "./WorkExperience";
import Performance from "./Performance";
function MainContent (){    
    return (
        <>
            <article className="wrapper-main-content">
                    <input type="radio" name="radio_chk" id="education" value="education" className="radio_chk" />
                    <input type="radio" name="radio_chk" id="skill" value="skill" className="radio_chk"   defaultChecked={true} />
                    <input type="radio" name="radio_chk" id="performance" value="performance" className="radio_chk" />
                    <input type="radio" name="radio_chk" id="contact" value="contact" className="radio_chk" />
                    <input type="radio" name="radio_chk" id="experience" value="experience" className="radio_chk"  />
                
                <Education />
                <Skill />
                <WorkExperience />
                <Performance />
                <section className="main-content main-content-contact">
                <h3>บทความ</h3>
                <br />
                <div className="blog fade-slide-top">
                        <section>
                            
                        </section>
                    </div>
                </section>
               
            </article>
            <div className="turn-on-notification">
                <section className="notification-title">
                    {/* {title} */}
                </section>
            </div>
           
        </>
    )
}
export default MainContent;