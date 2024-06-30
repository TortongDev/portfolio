function SectionContact(){
    return (
        <>
            <main>
                <div className="wrapper-contact">
                    <h3>Contact ติดต่อ</h3>
                    <div className="contact-form">
                        <div className="form-group">
                            <label htmlFor="">เรื่อง</label>
                            <input type="text" className="w3-input w3-border"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" className="w3-input w3-border"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">เนื้อหา</label>
                            <textarea rows={5} className="w3-input w3-border"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">อัพโหลดไฟล์</label>
                            <input type="file" name="" id="" className="w3-file w3-border" />
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )
}
export default SectionContact;