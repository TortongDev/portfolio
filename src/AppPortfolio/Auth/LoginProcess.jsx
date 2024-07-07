import {Swal} from 'sweetalert2'
import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

export default function LoginProcess(){
        const history = useNavigate()
        const api_enpoint = "http://localhost/ReactWebApplication/api/CheckAuth.php";
        
        useEffect(()=>{
            fetch(api_enpoint)
            
                .then(response => response.json())
            
                .then(data => {
                    Swal.fire({
                        title: 'เข้าสู่ระบบเรียบร้อย',
                        text: 'ยินดีต้อนรับและขอบคุณที่สนใจเข้าชม Website Portfolio ของผมนะครับ ^_^ ',
                        icon: 'success',
                        showConfirmButton: false
                    }).then((data)=>{
                        history('/portfolio')
                    })
                })
            
                .catch(error => console.log(error));
        
        })
    
    return (
        <>
        
        </>
    )

}