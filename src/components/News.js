export const News = () => {
  return (
    <div className={'news news-cover'}>
      <div className={'container news-container'}>
        <div className={'news-header'}>
          <img src="/assets/icons/star2.svg" alt="star2" />
          <h1 className={'news-title'} id={'news'}>Новая коллекция <br />французских авторов</h1>
        </div>
        <p className={'container news-text'}>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
          <br/>
          <br/>
          Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность
          направлений прогрессивного развития.</p>
        <div className={'news-link'}>
          <a href="#reproductions" className={'link__text'}>Ознакомиться</a>
        </div>
      </div>
    </div>
  );
};
