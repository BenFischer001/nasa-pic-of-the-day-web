import Display from "./Display"
import './Displays.css';

const Displays = ({displays}) => {
    

    //{displays.map((display, url) => (<Display key={url} imgUrl={display.url} />))}  {displays.map(({url}) => (<Display key={url} imgUrl={url} />))}
    return(
        <div className="container">
            {displays.map(({url, media_type}) => (<Display key={url} imgUrl={url} media_type={media_type}  />))}
        </div>
    )

}

export default Displays