import { skills } from '../constants/text';

export default () => (
  <section className="container section">
    <h3 className="section__title">My Tech Stack</h3>
    <ul className="skills-list">
      {skills.map((skill) => (
        <li key={skill} className="skills-item">{skill}</li>
      ))}
    </ul>
  </section>
);
