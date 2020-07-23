import React, { Component } from 'react';


function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img stc = {picture}/>
  </div>
}
const foodLike = [
  {
    name: "Kimchi"
  },
  {
    name: "Samgyeopsal"
  },
  {
    name: "Bibimbap"
  
  },
  {
    name: "Doncasu"   
  },
  {
    name: "Kimbap"
  }
];


function App() {
  return (
    <div>
      {foodLike.map(dish => (
      <Food name = {dish.name} picture = {dish.image} />
      ))}
    </div>
  )

}

export default App;