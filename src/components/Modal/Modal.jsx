
const Modal = (props)=>{
    return(
        <div className="Overlay">
            <div class="Modal">
                <img src={props.imaLarge} alt="" className="Modal-image" onClick={props.resetImaLarge}/>
            </div>
        </div>
    )
}

export default Modal;