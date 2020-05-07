import Header from '../components/Header';
import Section from '../components/shared/Section';

import text from '../constants/text';

import '../style/index.scss';

export default () => (
  <>
    <Header />
    <Section text={text.education}/>
    <Section text={text.jobs}/>
  </>
);
