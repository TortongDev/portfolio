
// import './index.css';
function HeaderLayout(){
    return (
        <>
            <header>
                <div className="logo">
                    <h2 id='portfolio-title' style={{fontWeight:'700px'}}>Portfolio</h2>

                </div>
            </header>
            <nav>
                <ul>
                    <li><a href="#profile">โปรไฟล์</a></li>
                    <li><a href="#education">การศึกษา</a></li>
                    <li><a href="#skill">ทักษะ</a></li>
                    <li><a href="#performance">ผลงาน</a></li>
                    <li><a href="">ประสบการณ์</a></li>
                    <li><a href="">เม้ามอยสิ่งที่พบเจอ</a></li>
                    <li><a href="">ติดต่อ</a></li>
                </ul>
            </nav>
        </>
    );
}
export default HeaderLayout;
