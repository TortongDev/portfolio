import { useEffect } from "react";

function SectionProfile(){
    useEffect(()=>{
        let topic = document.querySelector('.topic')
        let faderightbefore = document.querySelectorAll('.fade-right-before')

        let profileItem = document.querySelector('.item-activity')
        setTimeout(() => {
            topic.classList.add('fade-left-after')
            profileItem.classList.add('fade-up')
            faderightbefore.forEach(element => {
                element.classList.add('fade-right-after')
            });
            
        }, 400);
    })
    return (
        <>
            <main id="profile">
                <article className="profiles">
                    <section className="profile-image">
                        <div className="image">
                            <img style={{"width":"100%","height":"100%","objectFit":"cover"}} src={process.env.PUBLIC_URL + "/profile.jpg"} alt="profiles" />
                        </div>
                    </section>
                    <section className="profile-detail">
                        <div className="content-profile">
                            <div className="topic fade-left-before">
                                <h1 className="topic-before" style={{"fontWeight":"500"}}>โปรไฟล์</h1>
                            </div>
                            <br />
                            <div className="fade-right-before">
                                <h2 style={{"fontWeight":"500"}}>แนะนำตัว</h2>
                                <h3>สวัสดีครับ ผมชื่อนายกิตติทัต  เจริญเขต อายุ 27 ปีครับ</h3>
                                <h3>ตำแหน่ง Web Developer & Programmer</h3><br />
                                <h2 style={{"fontWeight":"500"}}>ที่อยู่ปัจจุบัน อาศัยอยู่ที่</h2>
                                <h3>Soi Pracha Uthit 22, Huai Khwang Subdistrict, Huai Khwang District, Bangkok 10310</h3><br />
                            </div>
                            <div className="fade-right-before">
                                <h2 style={{"fontWeight":"500"}}>แนวคิด</h2>
                                <h3>programmer อย่างผมไม่จำเป็นต้องไฟวกับใคร ลูกค้าบางคนเขาอาจไม่เข้าใจ การอธิบายให้เขาเข้าใจและซัพพอร์ทเขาได้ทำอะไรให้เขาได้คืองานของผม <br /> " งานจบได้ ทีมไม่เดือดร้อน ลูกค้าพึงพอใจ "</h3><br />
                                <h2 style={{"fontWeight":"500"}}>เว็บไชต์</h2>
                                <h3>www.kittithatwebdev.co.th</h3>
                            </div>
                            
                            <div className="flex-3 item-activity">
                                <section className="profile-item">
                                    <div className="image-item">
                                        <img src={process.env.PUBLIC_URL+"/getting-back-to-exercise-routine.webp"} alt="img1" style={{"width":"100%","height":"350px","objectFit":"cover"}}  />
                                    </div>
                                    <div className="detail-item">

                                        <h3>ออกกำลังกาย</h3><br />
                                        <h5> &emsp;เป็นสิ่งที่ผมบังคับตัวเองอยู่เสมอครับว่าทุกวันหลังเลิกงานต้องให้เวลาตัวเอง 30-50 นาทีมาออกกำลังกายและ 1 สัปดาห์จะตั้งวันหยุดพักออกกำลังกาย 1-2 วันเพื่อเป็นการ เซฟ ร่างกายครับ</h5>
                                    </div>
                                </section>
                                <section className="profile-item">
                                    <div className="image-item">
                                        <img src={process.env.PUBLIC_URL+"/logic-images.jpg"} alt="img1" style={{"width":"100%","height":"350px","objectFit":"cover"}}  />
                                    </div>
                                    <div className="detail-item">

                                        <h3>Test Logic</h3><br />
                                        <h5> &emsp;อีกหนึ่งงานอดิเรกในช่วงเวลาว่างๆ คือการทดสอบ Logic ตัวเองเล่นๆครับ โดยลองตั้งโจทย์ของระบบต่างๆ เป็นระบบเล็กๆที่ต้องใช้การคิด Logic ที่ซับซ้อน มา Code ออกมาเพื่อพัฒนา Logic ตัวเองอยู่เสมอให้ให้สมองทื่อครับ</h5>
                                    </div>
                                </section>
                                <section className="profile-item">
                                    <div className="image-item">
                                        <img src={process.env.PUBLIC_URL+"/play-game-pubgmobile.jpg"} alt="img1" style={{"width":"100%","height":"350px","objectFit":"cover"}}  />
                                    </div>
                                    <div className="detail-item">

                                        <h3>Play Game Pubg Mobile</h3><br />
                                        <h5> &emsp;สิ่งหนึ่งที่ทำเป็นงานอริเรกคือการเล่นเกมส์ครับ หลักๆจะเล่นในช่วงวันหยุดกับพี่ๆที่ทำงานเก่า ผมเล่นเป็นอยู่เกมส์นี้เกมส์เดียวครับเนื่องจากเป็นเกมส์ในมือถือเพราะสะดวกกว่าเล่นเกมส์ในคอมพิวเตอร์และถ้าหากงานด่วนเข้า มันสามารถออกเกมส์ได้ง่ายกว่า และเวลาในเกมส์ / 1  match ไม่ได้ใช้เวลามาก</h5>
                                    </div>
                                </section>
                            </div>    
                        </div>

                    </section>
                </article>
            
            </main>        
        </>
    );
}

export default SectionProfile;