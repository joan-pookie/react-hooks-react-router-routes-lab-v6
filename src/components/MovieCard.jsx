import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export default function MovieCard({ id, title, time, genres }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{time}</p>
    <p>{Array.isArray(genres) && genres.length > 0 
        ? genres.join(", ") 
        : "Genres not available"}</p>  
      <Link to={`/movie/${id}`}>View Details</Link>
    </div>
  );
}
