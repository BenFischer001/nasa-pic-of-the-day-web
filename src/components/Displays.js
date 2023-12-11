import Display from "./Display"

const Displays = ({displays}) => {
    

    //{displays.map((display, url) => (<Display key={url} imgUrl={display.url} />))}  {displays.map(({url}) => (<Display key={url} imgUrl={url} />))}
    return(
        <>
            {displays.map(({url, media_type}) => (<Display key={url} imgUrl={url} media_type={media_type}  />))}
        </>
    )

}

export default Displays