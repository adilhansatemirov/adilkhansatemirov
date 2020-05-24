export default () => (
  <footer className="footer" id="contacts">
    <div className="footer__contact">
      <a
        href="https://web.telegram.org/#/im?p=@Satemirov"
        target="_blank"
        rel="noopener"
        className="footer__telegram-link"
      >
        <div className="footer__telegram-message">
          <span>Contact me on Telegram</span>
          <img src="/images/icons/telegram.svg" alt="telegram" className="footer__telegram-icon" />
        </div>
        <p className="footer__telegram-contact">@Satemirov</p>
      </a>
    </div>
  </footer>
);
