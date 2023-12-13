
import './Display.css';


const Display = ({imgUrl, media_type, title, explanation}) => {
    return (
        < >
        
        <h1 className='title'>{title}</h1>
        {
        media_type == "image" ? ( 
                <img src={imgUrl} className="item"></img> 
        ) : (
            <iframe
            className="iframe"
            src={imgUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen
          ></iframe> 
        )

        }
        <p className='underText'>{explanation}</p>
        </>
    )
}

export default Display