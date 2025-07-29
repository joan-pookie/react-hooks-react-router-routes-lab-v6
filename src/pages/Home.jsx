// pages/Home.js

import movies from "../data/movies";
import actors from "../data/actors";
import directors from "../data/directors";
// Home.jsx

import styles from './Home.module.css';
import MovieCard from '../components/MovieCard';



export default function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
import React from 'react';