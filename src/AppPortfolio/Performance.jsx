export default function Performance(){
    return(
        <>
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
        </>
    )
}