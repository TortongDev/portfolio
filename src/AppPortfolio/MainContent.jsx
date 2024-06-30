import { useEffect } from "react";

function MainContent (){
    useEffect(()=>{
        const skill = document.querySelector('#skill')
        skill.checked = true;
    })

    return (
        <>
            
            <article className="wrapper-main-content">
                    <input type="radio" name="radio_chk" id="education" value="education" className="radio_chk" />
                    <input type="radio" name="radio_chk" id="skill" value="skill" className="radio_chk" />
                    <input type="radio" name="radio_chk" id="performance" value="performance" className="radio_chk" />
                    <input type="radio" name="radio_chk" id="contact" value="contact" className="radio_chk" />
                    <input type="radio" name="radio_chk" id="experience" value="experience" className="radio_chk"  />
                
                <section className="main-content main-content-education">
                <h3>การศึกษา</h3>
                    <br />
                    <div className="flex-wrap fade-slide-top">
                        <section>
                            <h4>วิทยาลัยเทคนิคร้อยเอ็ด</h4>
                            <ul>
                                <li>ประกาศณยบัตรวิชาชีพ ขั้นสูง (ปวส)</li>
                                <li>เกรดที่ได้ 3.33</li>
                                <li>ปีที่จบ 2016</li>
                            </ul>    
                        </section>
                        <section>
                            <h4>มหาวิทยาลัยราชมงคลอีสาน วิทยาเขตขอนแก่น</h4>
                            <ul>
                                <li>ปริญญาตรี</li>
                                <li>เกรดที่ได้ 3.23</li>
                                <li>ปีที่จบ 2019</li>
                            </ul>    
                        </section>
                      
                       
                    </div>
                </section>
                <section className="main-content-skill">
                    <h3>ทักษะ</h3>
                    <br />
                    <div className="flex-skill fade-slide-top">
                        <section>
                            <h4>Backend</h4>
                            <ul>
                                <li>PHP</li>
                                <li>VBA (Excel)</li>
                                <li>NodeJS (CRUD Basic)</li>
                            </ul>    
                        </section>
                       <section>
                           <h4>Frontend</h4>
                            <ul>
                                    <li>HTML , CSS , Javascript</li>
                                    <li>Bootstrap</li>
                                    <li>W3c.css</li>
                                    <li>Jquery</li>
                                    <li>ReactJS</li>
                                </ul>
                       </section>
                       <section>
                            <h4>Tool</h4>
                            <ul>
                                <li>Navicate</li>
                                <li>Forticliant</li>
                                <li>SQL Server Management</li>
                                <li>Postman</li>
                                <li>Git/Github</li>
                                <li>Visual Studio code</li>
                                <li>Notpade++</li>
                                <li>Crystal Report</li>
                            </ul>
                       </section>
                       <section>
                            <h4>Database</h4>
                            <ul>
                                <li>Mysql</li>
                                <li>Sql Server</li>
                            </ul>
                        </section>
                        <section>
                            <h4>OS</h4>
                            <ul>
                                <li>Window 7,8,10,11</li>
                                <li>Linux Ubuntu</li>
                            </ul>
                        </section>
                       
                    </div>
                </section>
                <section className="main-content main-content-performance ">
                    <h3>ผลงาน</h3>
                    <br />
                    <div className="grid-2 fade-slide-top">
                        <section>
                            <div className="performance-image">
                                <img src={process.env.PUBLIC_URL + "/logo-tsc"} style={{"width":"200px"}} className="profile-hover"  alt="" />
                            </div>
                            <div className="performance-detail">
                                <h4>ระบบ Thai Stop Covid</h4>
                                <ul>
                                    <li>หน้าที่ที่เกี่ยวข้อง : เป็นหนึ่งในทีมที่พัฒนาและเป็นตัวหลักเพียงคนเดียวที่ออกไปประจำที่ site งานลูกค้าที่ กรมอนามัย กระทรวงสาธารณสุข</li>
                                    <li>เกี่ยวกับระบบ : เป็นระบบประเมินมาตรการความปลอดภัยด้านโควิต 19 ของกรมอนามัย กระทรวงสาธารณสุข</li>
                                    <li>Link : <a href="https://stopcovid.anamai.moph.co.th">Thai Stop Covid</a></li>
                                </ul>
                            </div>    
                        </section>
                        <section>
                            <div className="performance-image">
                                <img src={process.env.PUBLIC_URL + "/dashboard.webp"} className="profile-hover"  alt="" />
                            </div>
                            <div className="performance-detail">
                                <h4>Dashboard ประเมินโรงเรียน</h4>
                                <ul>
                                    <li>หน้าที่ที่เกี่ยวข้อง : พัฒนา Dashbard ตัวนี้ขึ้นมา</li>
                                    <li>เกี่ยวกับระบบ : หน้า Dashboard One Page เพื่อแสดงรายงานสรุปโรงเรียนทั่วประเทศไทยที่มาทำการประเมิน</li>
                                    <li>Link : <a href="https://stopcovid.anamai.moph.co.th">SchoolHealth Dashboard</a></li>
                                </ul>    
                            </div>    
                        </section>
                        <section>
                            <div className="performance-image">
                                    <img src={process.env.PUBLIC_URL + "/dashboard.webp"} className="profile-hover"  alt="" />
                            </div>
                            <div className="performance-detail">
                                <h4>Dashboard รายงานศูนย์บริการที่มีการเชื่อมโยงข้อมูลโครงการบัตร 30 บาท</h4>
                                <ul>
                                    <li>หน้าที่ที่เกี่ยวข้อง : พัฒนา Dashbard ตัวนี้ขึ้นมา</li>
                                    <li>เกี่ยวกับระบบ : หน้า Dashboard One Page เพื่อแสดงรายงานสรุปโรงเรียนทั่วประเทศไทยที่มาทำการประเมิน</li>
                                    <li>Link : <a href="https://stopcovid.anamai.moph.co.th">SchoolHealth Dashboard</a></li>
                                </ul>
                            </div>    
                        </section>
                        <section>
                            <div className="performance-image">
                                <img src={process.env.PUBLIC_URL + "/dashboard.webp"} className="profile-hover"  alt="" />
                            </div>
                            <div className="performance-detail">
                                <h4>Dashboard ผลตรวจสอบความมั่นคงปลอดภัยทางไซเบอร์ </h4>
                                <ul>
                                    <li>หน้าที่ที่เกี่ยวข้อง : พัฒนา Dashbard ตัวนี้ขึ้นมา</li>
                                    <li>เกี่ยวกับระบบ : หน้า Dashboard One Page เพื่อแสดงรายงานสรุปโรงเรียนทั่วประเทศไทยที่มาทำการประเมิน</li>
                                    <li>Link : <a href="https://stopcovid.anamai.moph.co.th">SchoolHealth Dashboard</a></li>
                                </ul>    
                            </div>
                        </section>
                        <section>
                            <div className="performance-image">
                                <img src={process.env.PUBLIC_URL + "/iodine-logo.png"} className="profile-hover"  alt="" />
                            </div>
                            <div className="performance-detail">
                                <h4>เว็บไซต์ Iodine</h4>
                                <ul>
                                    <li>หน้าที่ที่เกี่ยวข้อง : พัฒนา หน้า Front ของเว็บไซต์</li>
                                    <li>เกี่ยวกับระบบ :  </li>
                                    <li>Link : <a href="https://stopcovid.anamai.moph.co.th">Thai Stop Covid</a></li>
                                </ul>    
                            </div>
                        </section> 
                        
                        <section>
                            <div className="performance-image">
                                <img src={process.env.PUBLIC_URL + "/logo.gif"} className="profile-hover" alt="" />
                            </div>
                            <div className="performance-detail">
                                <h4>เว็บไซต์ Netsys Loas</h4>
                                <ul>
                                    <li>หน้าที่ที่เกี่ยวข้อง : พัฒนา Dashbard ตัวนี้ขึ้นมา</li>
                                    <li>เกี่ยวกับระบบ :  </li>
                                    <li>Link : <a href="https://stopcovid.anamai.moph.co.th">Thai Stop Covid</a></li>
                                </ul>
                            </div>    
                        </section>
                    </div>
                </section>
                <section className="main-content main-content-contact">
                <h3>ความต้องการ / สิ่งที่คาดหวัง</h3>
                <br />
                <div className="grid-2 fade-slide-top">
                        <section>
                            <ul>
                                <li>การเป็น Web Developer</li>
                                <li></li>
                                <li>ปีที่จบ 2016</li>
                            </ul>    
                        </section>
                    </div>
                </section>
                <section className="main-content main-content-experience">
                <h3>การทำงาน/ประสบการณ์</h3>
                    <br />
                    <div className="flex-wrap fade-slide-top">
                        <section>
                            <h4>บริษัท Moserv</h4>
                            <ul>
                                <li>ตำแหน่ง Junior Software Enjinior</li>
                                <li>เงินเดือนที่ได้รับ 15,000</li>
                                <li>วันที่เข้าทำงาน วันที่ 7 พฤษจิกายน 2562  </li>
                                <li>ถึงวันที่ 31 มิถุนายน 2564  </li>
                            </ul>    
                        </section>
                        <section>
                            <h4>บริษัท Bizpotentail</h4>
                            <ul>
                                <li>ตำแหน่ง PHP Programmer & Developer</li>
                                <li>เงินเดือนที่ได้รับ 19,800</li>
                                <li>วันที่เข้าทำงาน วันที่ 5 กรกฎาคม 2564 </li>
                                <li>ถึงวันที่ 31 ธันวาคม 2566 </li>
                            </ul>    
                        </section>
                        <section>
                            <h4>บริษัท Netsys</h4>
                            <ul>
                                <li>ตำแหน่ง Programmer</li>
                                <li>เงินเดือนที่ได้รับ 23,000</li>
                                <li>วันที่เข้าทำงาน วันที่  5 มกราคม 2567 </li>
                                <li>ถึงปัจจุบัน</li>
                            </ul>    
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