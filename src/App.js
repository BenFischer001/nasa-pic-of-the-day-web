import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Displays from './components/Displays'
import Button from './components/Button';

function App() {

  const [displays, setDisplays] = useState([])
  const [nextImgDate, setNextImgDate] = useState(1699810179139)

  useEffect(() => {
    const initFetch = async (formattedDate) => {
      const data = await fetchImg(formattedDate)
      setDisplays([...displays, data])
    }
    const date = new Date()
    date.setDate(date.getDate() - 1);
    const formattedDate = date.toISOString().split('T')[0];
    setNextImgDate(date)
    initFetch(formattedDate)
  }, [])

 /* useEffect(() => {
    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0];
    console.log("initial load: ", formattedDate)
    setNextImgDate(date)
  }, [])*/



  const fetchImg = async (day='') => {
    console.log("https://api.nasa.gov/planetary/apod?api_key="+process.env.REACT_APP_API_KEY+"&date="+day)
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key="+process.env.REACT_APP_API_KEY+"&date="+day)
    const data = res.json()
    return data
  }

  const loadNextDay = async () => {
    /*
    const date = new Date(nextImgDate-86400000)
    console.log(date.valueOf(), date.getDay(),date.getMonth(),date.getFullYear())
    setNextImgDate(date.valueOf())
    
    console.log(date.getFullYear() +'-'+ ('0' + (date.getMonth() +1)).slice(-2) +'-'+('0' + (date.getDay() +3)).slice(-2))
    const data = await fetchImg(date.getFullYear() +'-'+ ('0' + (date.getMonth() +1)).slice(-2) +'-'+('0' + (date.getDay() +3)).slice(-2))
    setDisplays([...displays, data]) */ 

    const newDate = new Date(nextImgDate);
    newDate.setDate(nextImgDate.getDate() - 1);

    setNextImgDate(newDate);

    const formattedDate = newDate.toISOString().split('T')[0];
    console.log(formattedDate)

    const data = await fetchImg(formattedDate)
    setDisplays([...displays, data]) 
  }

//<Display imgUrl="https://apod.nasa.gov/apod/image/2312/_MG_4553_rawfile1024.jpg" />
  return (
    <div className="App">
      <h1>NASA pic of the day</h1>
      <Displays displays={displays}/>
      <Button text = "Load Next Day" onClick={loadNextDay} className="item"/>
    </div>
  );
}

export default App;
