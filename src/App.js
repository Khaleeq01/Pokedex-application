import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data,setData]=useState();
  const [name,setName]=useState();
  const [weight,setWeight]=useState();
  const [number,setNumber]=useState(1);

    URL=`https://pokeapi.co/api/v2/pokemon/${number}`;
    
  useEffect(()=>{
    axios.get(URL).then((response)=>{
      console.log(response.data)
    setData(response.data);
    setName(response.data.name)
    setWeight(response.data.weight)
    }).catch((err)=>{
      window.alert(err);
    })
  },[URL])

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <input type={"number"}onChange={(e)=>{setNumber(e.target.value)}}/>
      <button>Show</button>
      <h2>Name:{name}</h2>
      <h3>Weight:{weight}</h3>
      <img src={data?data.sprites.other.dream_world.front_default:"<p>Loading</p>"}></img>
      <p>My abilities are:</p>
      {data? data.abilities.map((value,key)=>{
      return (
        <div key={key}>
          {value.ability.name}
          </div>
      )
      }):""}
    </div>
  );
}

export default App;
