import { useEffect, useState } from "react";
function Header (){
    
    let [hit, setHit] = useState(false)

    const clickOnBar = ()=>{
        setHit(hit => !hit)
        // if(hit == false){
        //     let menu = document.querySelector('.menu-mobile');
        //     menu.classList.add('menu-mobile-open-slide');
        //     setHit(true)
        // }else{
        //     let menu = document.querySelector('.menu-mobile');
        //     menu.classList.remove('menu-mobile-open-slide');
        //     setHit(false)

        // }
    }
    

    let [noti, setNoti] = useState(false)
    let [title, setTitle] = useState('v')

    const chked = (event,titleMenu)=>{
        setTitle(titleMenu)
        if(noti == false){
            console.log(noti);
                document.querySelector('.turn-on-notification').style.display = 'flex'
                setNoti(noti => !noti);
            setTimeout(() => {
                document.querySelector('.turn-on-notification').style.display = 'none'
                setNoti(noti => !noti);
            }, 1000);
        }
        let labelName = document.getElementById(event)
        document.querySelector('.notification-title').innerHTML = titleMenu
        if(!labelName.checked){
            labelName.checked = true
            let label = document.querySelectorAll('label');
            let  fadeSlideUp = document.querySelectorAll('.fade-slide-top')
            fadeSlideUp.forEach(element => {
                element.classList.add('fade-slide-up')
            });
            setHit(hit => !hit)
        }

    }
    let labelHandle = document.querySelectorAll('label')
    labelHandle.forEach(element => {
        element.addEventListener('click',()=>{
            let menu = document.querySelector('.menu-mobile');

            if(hit == true){
                menu.classList.remove('menu-mobile-open-slide');
            }
        })
    });
    return (
        <>
            <header>
                <section className="title">
                    <center><h2>My Portfolio</h2></center>
                </section>
                <section className="barSideMenu">
                    <ul>
                        <li><i onClick={clickOnBar} className="fa-solid fa-bars"></i></li>
                    </ul>
                </section>
                <section className={`menu-mobile ${ hit ? 'menu-mobile-open-slide' : ''}`}>
                    <ul>
                        <li><label onClick={()=>chked('skill','ทักษะ')}>ทักษะ</label></li>
                        <li><label onClick={()=>chked('education','การศึกษา')}>การศึกษา</label></li>
                        <li><label onClick={()=>chked('experience','การทำงาน/ประสบการณ์')}>การทำงาน/ประสบการณ์</label></li>
                        <li><label onClick={()=>chked('performance','ผลงาน')}>ผลงาน</label></li>
                        <li><label onClick={()=>chked('contact','การทำงาน/ประสบการณ์')} >การทำงาน/ประสบการณ์</label></li>
                    </ul>
                </section>
                <section className="header-navbar">
                    <ul>
                        <li><label onClick={()=>chked('skill','ทักษะ')}>ทักษะ</label></li>
                        <li><label onClick={()=>chked('education','การศึกษา')}>การศึกษา</label></li>
                        <li><label onClick={()=>chked('experience','การทำงาน/ประสบการณ์')}>การทำงาน/ประสบการณ์</label></li>
                        <li><label onClick={()=>chked('performance','ผลงาน')}>ผลงาน</label></li>
                        <li><label onClick={()=>chked('contact','การทำงาน/ประสบการณ์')} >การทำงาน/ประสบการณ์</label></li>
                    </ul>
                </section>

            </header>
           
        </>
    )
}
export default Header;