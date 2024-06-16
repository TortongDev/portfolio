import { useEffect } from "react";
import HeaderLayout from "./HeadeLayout";
import SectionEducation from "./SectionEducation";
import SectionProfile from "./SectionProfile";
import SectionSkill from "./SectionSkill";
import SectionPerformance from "./SectionPerformance";
import SectionExperience from "./SectionExperience";

function MainPage(){
    useEffect(()=>{
        scrollerSection()
    })
    const scrollerSection = () => {
        window.addEventListener('scroll', function() {
            let performanceText = document.querySelectorAll('.fade-defualt-up');
            let performanceText1 = document.querySelectorAll('.fade-defualt-down');
                for (let section of performanceText) {
                    let position = section.getBoundingClientRect().top;
                    let windowHeight = window.innerHeight / 1.3; 
                    if (position < windowHeight) {
                        section.classList.add('fade-to-up');
                    }
                }
                for (let section2 of performanceText1){
                    let position1 = section2.getBoundingClientRect().top;
                    let windowHeight2 = window.innerHeight / 1.3;
                    if(position1 < windowHeight2){
                        section2.classList.add('fade-to-down')
                    }
                }
        });
    }
    return (
        <>
            <HeaderLayout />
            <SectionProfile />
            <SectionEducation />
            <SectionSkill />
            <SectionPerformance />
            <SectionExperience />
            <div id="back-to-top">
               <a href="#portfolio-title">Top</a> 
            </div>
        </>
    );
}
export default MainPage;