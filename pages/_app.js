import Header from '../components/Header';
import Section from '../components/shared/Section';

import Skills from '../components/Skills';
import Footer from '../components/Footer';

import { sections, consoleText } from '../constants/text';

import '../style/index.scss';

console.log(consoleText);
export default () => (
  <>
    <Header />
    {sections.map((section) => (
      <Section key={section.id} section={section} />
    ))}
    {/* <Skills /> */}
    <Footer />
  </>
);
