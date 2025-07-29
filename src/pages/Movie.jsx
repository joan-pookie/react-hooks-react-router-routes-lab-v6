import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies";
import actors from "../data/actors";
import directors from "../data/directors";

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find(m => String(m.id) === id);

  if (!movie) {
    throw new Error("Movie not found");
  }

  return (
    <section>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      {movie.genres.map((g, idx) => (
        <span key={idx}>{g}</span>
      ))}
    </section>
  );
}
