import React from 'react'
import './App.css';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import Button from './Button';



function App() {
  return (
    <div className="App">
      <MovieCard/>
      <MovieList/>
      <Button/>
    </div>
  );
}

export default App;
