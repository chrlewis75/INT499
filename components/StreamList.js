import React, { useState , useEffect } from 'react';
import logo from '../images/Logo.png';
import './StreamList.css';

const StreamList = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
        console.log('Loaded movies from localStorage:', JSON.parse(savedMovies));
        setMovies(JSON.parse(savedMovies));
    }
  }, []);

  useEffect(() => {
    console.log('Saving movies to localStorage:', movies);
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
        setMovies((preMovies) => {
            const updatedMovies = [...preMovies, input];
            console.log('Updated movies:', updatedMovies);
            return updatedMovies;
        });
        setInput('');
    }
  };

  return (
    <div className="streamlist-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="movie-title"
          name="movieTitle"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Movie Title"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="movie-list">
        {movies.map((movie, index) => (
            <div key={index} className="movie-item">
                {movie}
            </div>
          ))}
        </div>
    </div>
  );
};

export default StreamList;