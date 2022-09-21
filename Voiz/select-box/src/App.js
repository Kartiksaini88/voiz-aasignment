import logo from "./logo.svg";
import './App.css'
import { useEffect, useState } from "react";
import SelectTag from "./SelectTag/SelectTag";
import axios from "axios";

function App() {
  const [gameData, setgameData] = useState({});
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "d2b286aab1msh6d9e3aa2d195a10p1fe600jsn8f215dda4740",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const getData = () => {
    axios
      .request(options)
      .then((res) => {
        setgameData(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1><i>Games</i></h1>
      <SelectTag gameData={gameData}></SelectTag>
    </div>
  );
}

export default App;
