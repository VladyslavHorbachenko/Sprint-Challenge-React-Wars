import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarPeople from './components/StarPeople';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [person,setPerson] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
      .then(response => {
        //console.log(response.data.results);
        setPerson(response.data.results);
      })
      .catch(error => {
        console.log("Error because",error);

      })
  },[])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {person.map((item,index) => {
        //console.log(item);
          return(
            <StarPeople
            key = {index}
            name = {item.name}
            height = {item.height}
            mass = {item.mass}
            skin_color = {item.skin_color}
            eye_color = {item.eye_color}
            birth_year = {item.birth_year}
            gender = {item.gender}
            
            />
          )
      })}
    </div>
  );
}

export default App;
