import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
  { id: 3, title: "Dunkirk" },
];

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>{movie.title}</p>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
