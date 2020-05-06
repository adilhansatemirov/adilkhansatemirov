import text from '../text';

export default () => (
  <div className="header">
    <div className="header__title-container">
      <h1 className="header__title">
        <span>Hi, I'm</span>
        <span>Adilkhan Satemirov</span>
      </h1>
      <h2 className="header__subtitle">{text.text}</h2>
    </div>
    <div className="header__image-container">
      <img src="/images/poster.jpg" alt="adilkhansatemirov" className="header__image" />
    </div>
  </div>
);
