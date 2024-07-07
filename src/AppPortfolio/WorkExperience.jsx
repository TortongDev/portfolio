import { useState } from "react";
import ModalDetail from "./ModalDetail";

export default function WorkExperience() {
    const onOpenModal = (titleName) => {
        setTitleName(titleName)
        document.querySelector('.wrapper-modal').style.display='flex'
    }
    const onCloseModal = () =>{
        document.querySelector('.wrapper-modal').style.display = 'none';
    }

    const [getTitleName,setTitleName] = useState('')
    return (
        <>
            <section className="main-content main-content-experience">
                <h3>การทำงาน/ประสบการณ์</h3>
                <br />
                <div className="flex-wrap fade-slide-top">
                    <section>
                        <h4>บริษัท Moserv</h4>
                        <ul>
                            <li>ตำแหน่ง Junior Software Enjinior</li>
                            <li>เงินเดือนที่ได้รับ 20,000</li>
                            <li>วันที่เข้าทำงาน วันที่ 7 พฤษจิกายน 2562  </li>
                            <li>ถึงวันที่ 31 มิถุนายน 2564  </li>
                            {/* <li>
                                <button onClick={()=>onOpenModal('บริษัท Moserv')} className="w3-button w3-black">Open Modal</button>
                            </li> */}
                        </ul>
                    </section>
                    <section>
                        <h4>บริษัท Bizpotentail</h4>
                        <ul>
                            <li>ตำแหน่ง PHP Programmer & Developer</li>
                            <li>เงินเดือนที่ได้รับ 29,800</li>
                            <li>วันที่เข้าทำงาน วันที่ 5 กรกฎาคม 2564 </li>
                            <li>ถึงวันที่ 31 ธันวาคม 2566 </li>
                            {/* <li>
                                <button onClick={()=>onOpenModal('บริษัท Bizpotentail')} className="w3-button w3-black">Open Modal</button>
                            </li> */}
                        </ul>
                    </section>
                    <section>
                        <h4>บริษัท Netsys</h4>
                        <ul>
                            <li>ตำแหน่ง Programmer</li>
                            <li>เงินเดือนที่ได้รับ 33,000</li>
                            <li>วันที่เข้าทำงาน วันที่  5 มกราคม 2567 </li>
                            <li>ถึงปัจจุบัน</li>
                            {/* <li>
                                <button className="w3-button w3-black">Open Modal</button>
                            </li> */}
                        </ul>
                    </section>
                </div>
                <div className="wrapper-modal">
                    <ModalDetail description="wwwwww" titleDetail={getTitleName} onCloseModal={onCloseModal}/>
                </div>
            </section>
        </>
    )
}