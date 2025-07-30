import React from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";
export default function Home({ movies = [] }) {
   if (!movies || movies.length === 0) return <p>No movies available</p>;

  return (
    <section>
      <h1>Home Page</h1>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            time={movie.time}
            genres={movie.genres} // Must exist and be an array
          />
        ))
      ) : (
        <p>No movies available</p>
      )}
    </section>
  );
}
