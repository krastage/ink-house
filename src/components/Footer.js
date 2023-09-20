export const Footer = () => {
  return (
    <div className={'footer'}>
      <div className={'container footer-container'}>
        <div className={'footer__company'}>
          <a href=""><img src="/assets/icons/logo.svg" alt="logo" /></a>
          <div>
            <p className={'company-number'}>+7 (999) 54-54-54</p>
            <p className={'company-text'}>Мастерская</p>
          </div>
        </div>
        <div className={'footer__links-social'}>
          <div className={'footer__links'}>
            <ul className={'links-list'}>
              <li><a href="#reproductions" className={'list__linkHeader'}>Репродукции</a></li>
              <li><a href="#reproductions" className={'list__link'}>Франция</a></li>
              <li><a href="#reproductions" className={'list__link'}>Германия</a></li>
              <li><a href="#reproductions" className={'list__link'}>Англия</a></li>
            </ul>
            <ul className={'links-list'}>
              <li><a href="#news" className={'list__linkHeader'}>Новинки</a></li>
              <li><a href="#news" className={'list__link'}>2021</a></li>
              <li><a href="#news" className={'list__link'}>2020</a></li>
            </ul>
            <ul className={'links-list'}>
              <li><a href="#team" className={'list__linkHeader'}>О нас</a></li>
              <li><a href="#team" className={'list__link'}>Художники</a></li>
              <li><a href="#team" className={'list__link'}>Менеджеры</a></li>
            </ul>
          </div>
          <div className={'footer__social'}>
            <ul className={'social-list'}>
              <li><a href=""><img src="/assets/icons/fb.svg" alt="facebook" /></a></li>
              <li><a href=""><img src="/assets/icons/inst.svg" alt="facebook" /></a></li>
              <li><a href=""><img src="/assets/icons/yb.svg" alt="facebook" /></a></li>
            </ul>
            <div className={'social-company'}>
              <p className={'company-name'}>Ink. House ®</p>
              <p className={'company-name'}>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
