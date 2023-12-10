import Display from "./Display"

const Displays = ({displays}) => {
    

    //{displays.map((display, url) => (<Display key={url} imgUrl={display.url} />))}  {displays.map(({url}) => (<Display key={url} imgUrl={url} />))}
    return(
        <>
            {displays.map(({url}) => (<Display key={url} imgUrl={url} />))}
        </>
    )

}

export default Displays