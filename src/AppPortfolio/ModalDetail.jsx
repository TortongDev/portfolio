function ModalDetail (props) {
    let {onCloseModal,titleDetail} = props;

    return (
        <>
        <section className="modal">
            <div className="modal-header">
                <div className="modal-header-title">{titleDetail}</div>
                <div className="modal-header-close" onClick={onCloseModal}>close</div>
            </div>
            <div className="modal-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quod.
            </div>
        </section>
            
        </>
    );
}
export default ModalDetail;

