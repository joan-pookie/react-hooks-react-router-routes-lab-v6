import { Link } from "react-router-dom";

function Movie() {
  const movies = [
    { id: 1, title: "Doctor Strange" },
    { id: 2, title: "Black Panther" },
    { id: 3, title: "Iron Man" },
  ];

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}

export default Movie;
