export const Team = () => {
  return (
    <div className={'container'}>
      <div className={'team'}>
        <h1 className={'team-title'} id={'team'}>Наша команда</h1>
        <p className={'team-text'}>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет
          оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться
          от того, что консультация с широким активом.</p>
        <ul className={'team-list'}>
          <li>
            <img src="/assets/team/person1.png" alt="person1" />
          </li>
          <li>
            <img src="/assets/team/person2.jpg" alt="person2" />
          </li>
          <li>
            <img src="/assets/team/person3.jpg" alt="person3" />
          </li>
        </ul>
      </div>
    </div>
  );
};
