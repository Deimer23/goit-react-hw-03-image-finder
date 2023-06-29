
const ImageGalleryItem = (props)=>{    
    return(
        <>
        {
          props.image.map(image=>(
            <li className="ImageGalleryItem" key={image.id}>
                <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" onClick={props.onModal} data-img={image.largeImageURL}/>
            </li>
          ))  
        }
        </>
        
    )
}

export default ImageGalleryItem;