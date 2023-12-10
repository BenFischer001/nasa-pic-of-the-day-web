import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Displays from './components/Displays'
import Button from './components/Button';

function App() {

  const [displays, setDisplays] = useState([])
  const [nextImgDate, setNextImgDate] = useState(1699810179139)

  useEffect(() => {
    const initFetch = async () => {
      const data = await fetchImg("")
      setDisplays([...displays, data])
    }

    initFetch()
  }, [])

  useEffect(() => {
    const date = new Date()
    console.log(date)
    setNextImgDate(date)
  }, [])

  const fetchImg = async (day='') => {
    //console.log("https://api.nasa.gov/planetary/apod?api_key="+process.env.REACT_APP_API_KEY+"&date="+day)
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key="+process.env.REACT_APP_API_KEY+"="+day)
    const data = res.json()
    return data
  }

  const loadNextDay = async () => {
    const date = new Date(nextImgDate-86400000)
    console.log(date, date.getDay())
    setNextImgDate(date)
    
    console.log(date.getFullYear() +'-'+ ('0' + (date.getMonth() +1)).slice(-2) +'-'+('0' + (date.getDay() +3)).slice(-2))
    const data = await fetchImg(date.getFullYear() +'-'+ ('0' + (date.getMonth() +1)).slice(-2) +'-'+('0' + (date.getDay() +3)).slice(-2))
    setDisplays([...displays, data])
  }

//<Display imgUrl="https://apod.nasa.gov/apod/image/2312/_MG_4553_rawfile1024.jpg" />
  return (
    <div className="App">
      <h1>NASA pic of the day</h1>
      <Displays displays={displays}/>
      <Button text = "Load Next Day" onClick={loadNextDay}/>
    </div>
  );
}

export default App;
