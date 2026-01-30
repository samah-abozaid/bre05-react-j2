import './App.css';
import { skills, posts } from './data.js';
//Il faut les envelopper dans un parent unique (<main> )
function App() {  
  return (
    <div className="layout">  
      <section className="competances-section">
        <h1>Joan Doe</h1>

        <h2>Compétences</h2>
        <ul  className="competances">
          {skills.map((skill, i) => (
            <li key={i}>
              {skill.name} : {skill.grade}/5
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Publications</h2>
        <ul className="publication">
          {posts.map((post, i) => (
            <li key={i}>
              <article>
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
