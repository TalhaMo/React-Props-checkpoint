import React from 'react';
import Profile from './profile/Profile component/Profile';
import image from './image.jpg';
import './App.css';



function App() {
  
const handleName =(name)=>{alert(`Name of profile user is ${name}`)}
  return (
    <div className="App">
  <Profile 
  fullName="Talha Med Hossein" 
  bio="I'm a mechanical enginneer graduated from National School of Engineering of Tunisia since 2015. Currently i want to jumpstart my career in software engineering." 
  profession="Mechanical engineer" 
   handleName={handleName}
   >
  
  <img src={image} alt="myPicture" />

  </Profile>
    </div>
  );
}

export default App;
