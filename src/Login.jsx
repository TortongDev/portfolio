import { useEffect } from "react";
import Swal from 'sweetalert2'

function Login(){

    useEffect(()=>{
        document.querySelector('#submit').addEventListener('click', ()=>{
                let password = document.querySelector('[name=password]')
                let classLogin = document.querySelector('.login')
                console.log(password.value);
            if(password.value == 'asdfjkl;'){
                classLogin.style.boxShadow = 'unset'
                let item1 = document.querySelector('.header-login-effect-item1')
                let item2 = document.querySelector('.header-login-effect-item2')
                setTimeout(() => {
                    item1.classList.add('show')
                    item2.classList.add('show')
                }, 1000);
                setTimeout(()=>{
                    Swal.fire({
                        title: 'เข้าสู่ระบบเรียบร้อย',
                        text: 'ยินดีต้อนรับและขอบคุณที่สนใจเข้าชม Website Portfolio ของผมนะครับ ^_^ ',
                        icon: 'success',
                        showConfirmButton: false
                    })
                },3000)
            }else{
                Swal.fire({
                    title: 'เข้าสู่ระบบไม่สำเร็จ',
                    text: 'รหัสผ่านไม่ถูกต้อง กรุณาติดต่อเจ้าของ Website เพื่อขอรหัสผ่าน',
                    icon: 'error',
                    confirmButtonText: 'OK'

                })
            }
        })
        
    },[])
    return (
        <>
    
            <article className="wrapper-login">
                <section className="login">
                   
                    <div className="header-login-title">
                        <center>
                            <h2>ตรวจสอบความถูกต้อง</h2>
                            <h6 style={{fontWeight:"100"}}>กรุณากรอกข้อมูลรหัสผ่านเพื่อตรวจสอบสิทธิ์ในการเข้าชม Website</h6>
                        </center>
                    </div>
                    <div className="wrapper-form-login">
                        <div className="form-group">
                            <label htmlFor="KeyLogin"><i className="fa-solid fa-key"></i> รหัสผ่าน</label>
                            <input type="password" name="password" placeholder="Enter Password" className="w3-border w3-input"/>
                        </div>
                        <div className="form-group">
                            <button id="submit" className="w3-button w3-blue w3-block">เข้าสู่ระบบ</button>
                        </div>
                        
                    </div>
                    <div className="header-login-effect-item1"></div>
                    <div className="header-login-effect-item2"></div>
                    <div className="footer-login">
                        <p>
                            เบอร์โทร : 0910174918 <br />
                            Line ID : tortong91
                        </p>
                    </div>
                </section>
                
            </article>
            
        </>
    )

}

export default Login;