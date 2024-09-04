import { useState } from 'react'
import CardFooter from './CardFooter.jsx';
import './App.css'; 


function App() {
  return (
    <div>
      <CardFooter 
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wtQobs4YwMtKxaYb6IrzMbitTPCQ0QzreQ&s" 
        title="Bubu y dudu" 
        description="Estos son bubu y dudu ." 
      />
    </div>
  );
}

export default App
