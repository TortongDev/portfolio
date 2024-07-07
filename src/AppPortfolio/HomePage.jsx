import Auth from "./Auth/Auth"
import Header from "./Header"
import MainContent from "./MainContent"
function HomePage(){

    return (
        <>
            <main>
                <div className="wrapper-container">
                    <section className="container-l">
                        <div className="wrapper-profile shadow">
                            <img src={process.env.PUBLIC_URL + "/profile-tecnic.jpg"} alt="image-profile" className="image-profile profile-hover " />
                        </div>
                        <div className="wrapper-profile-detail">
                            <div className="area-text">
                                <h5>กิตติทัต  เจริญเขต</h5>
                            </div>
                            <h5>Web Developer / Programmer</h5>
                            <h5><u>อายุ</u> : 27 ปี </h5>
                            <h5><u>ที่อยู่</u> : 20 ประชาอุทิศ เขตห้วยขวาง แขวงห้วยขวาง กรุงเทพมหานคร 10310 </h5>
                            <h5><u>อีเมล</u><br />Kittithat.charoenkhet101@gmail.com </h5>
                            <h5><u>เบอร์โทร</u> : 0910174918</h5>
                            <h5><u>เว็บไซต์</u> : www.kittithatwebdev.com</h5>
                        </div>
                    </section>
                    <section className="container-r">
                        <Header />
                        <MainContent />
                    </section>
                </div>
            </main>
        </>
    )

}

export default HomePage