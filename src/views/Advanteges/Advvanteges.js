import './Advanteges.css';

import Advant from '../Advant/Advant';
import Title from '../Title/Title';

const advanteges = [
  {
    title: 'ВЫСОКИЙ УРОВЕНЬ КАЧЕСТВА ОБСЛУЖИВАНИЯ',
    description:
      'с удовольствием помогут вам подобрать подходящий автомобиль и ответят на все возникающие у вас вопросы',
  },
  {
    title: 'ОГРОМНЫЙ ВЫБОР АВТОМОБИЛЕЙ В ПАРКЕ',
    description:
      'мы предлагаем вашему вниманию модели эконом-класса и машины премиум класса, все они застрахованы.',
  },
  {
    title: 'ИДЕАЛЬНОЕ ТЕХНИЧЕСКОЕ СОСТОЯНИЕ ВСЕХ МАШИН',
    description:
      'все автомобили находятся в отличном техническом состоянии и постоянно проходят соответственные проверки.',
  },
  {
    title: 'ОПЕРАТИВНОСТЬ ОФОРМЛЕНИЯ ДОКУМЕНТОВ',
    description:
      'пакет документов, который вам нужно предоставить, чтобы арендовать автомобиль, минимален, его оформят всего за 15-20 минут.',
  },
  {
    title: 'ЮРИДИЧЕСКИ ГРАМОТНОЕ ОФОРМЛЕНИЕ ДОГОВОРОВ',
    description:
      'ваши интересы будут соблюдены, а ваша бухгалтерия получит все необходимые документы, оформленные по всем правилам.',
  },
  {
    title: 'ПУНКТУАЛЬНОСТЬ И ОТВЕТСТВЕНОСТЬ',
    description:
      'можете не сомневаться, вы получите выбранный вами автомобиль на прокат в оговоренное время.',
  },
];

const Advanteges = () => (
  <section className='advanteges' id='advantages'>
    <Title text='Преимущества' />
    <div className='border-top'>
      <div className='container'>
        <div className='advanteges__items'>
          {advanteges.map((advant, index) => (
            <Advant
              title={advant.title}
              description={advant.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Advanteges;
