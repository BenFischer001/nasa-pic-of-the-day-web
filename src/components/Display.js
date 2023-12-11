
import './Display.css';


const Display = ({imgUrl, media_type}) => {
    return (
        <>
        {
        media_type == "image" ? ( <img src={imgUrl} className="item"></img> ) : (
            <iframe
            className="item"
            src={imgUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> 
        )

        }
        </>
    )
}

export default Display