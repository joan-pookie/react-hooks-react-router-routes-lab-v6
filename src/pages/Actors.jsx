// pages/Actors.js
import actors from "../data/actors";

export default function Actors() {
  return (
    <section>
      <h1>Actors Page</h1>
      {actors.map(act => (
        <article key={act.name}>
          <h2>{act.name}</h2>
          <ul>
            {act.movies.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
