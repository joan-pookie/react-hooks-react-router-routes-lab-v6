// pages/Directors.js
import directors from "../data/directors";

function Directors() {
  return (
    <section>
      <h1>Directors Page</h1>
      {directors.map((dir) => (
        <article key={dir.name}>
          <h2>{dir.name}</h2>
          <ul>
            {dir.movies.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Directors;
