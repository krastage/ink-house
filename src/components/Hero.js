export const Hero = () => {
  return (
    <div className={'container hero-container'}>
      <img src="/assets/hero/bird.png" alt="bird" />
      <div>
        <h1 className={'hero-title'}>Реплики картин <br />от <span className={'hero-title__company'}>Ink. House</span>
        </h1>
        <p className={'hero-text'}>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения,
          доступные цены.</p>
        <a href="#reproductions">
          <div className={'hero-button'}>
            <a href="#reproductions" className={'button__text'}>Продукция</a>
          </div>
        </a>
      </div>
    </div>
  );
};
