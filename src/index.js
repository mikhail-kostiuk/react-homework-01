import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const presidents = [
  'Andrew Jackson',
  'Martin Van Buren',
  'William Henry Harrison'
];

const nextPresidents = [
  { firstName: 'John', lastName: 'Tyler', presidentIndex: 10 },
  { firstName: 'James K.', lastName: 'Polk', presidentIndex: 11 },
  { firstName: 'Zachary', lastName: 'Taylor', presidentIndex: 12 },
  { firstName: 'Millard', lastName: 'Fillmore', presidentIndex: 13 }
];

const serverResponse = [
  {
    'id': '666958530825467',
    'title': 'Friday open-air party w/ Lucarelli, Mihas and Yarik JR | Hide',
    'place': 'Hide',
    'date': '2020-06-12T20:00:00.000Z'
  },
  {
    'id': '786185895252176',
    'title': 'Захист скверу імені Чкалова',
    'place': 'Сквер Им. Чкалова',
    'date': '2020-06-10T09:00:00.000Z'
  },
  {
    'id': '623921328209118',
    'title': 'Живая музыка на летней террасе',
    'place': 'От Заката до Рассвета',
    'date': '2020-06-14T17:00:00.000Z'
  },
  {
    'id': '909559356190295',
    'title': 'Amer (2009)',
    'place': 'Кіноклуб Кіноха',
    'date': '2020-06-13T15:00:00.000Z'
  },
  {
    'id': '589272605321022',
    'title': 'В парк Межигорье на теплоходе',
    'place': 'Причал №6, Почтовая пл.',
    'date': '2020-06-13T07:45:00.000Z'
  }
];

function getDaytime(date) {
  const hour = new Date(date).getHours();

  if (hour >= 5 && hour < 11) {
    return 'Утро';
  }

  if (hour >= 11 && hour < 17) {
    return 'День';
  }

  if (hour >= 17 && hour < 21) {
    return 'Вечер';
  }

  return 'Ночь';
}

function handleSubmit(event) {
  event.preventDedault();

  // fetch('https://postman-echo.com/post', {method: 'POST', body: data});
}

ReactDOM.render(
  <React.StrictMode>
    <ul>
      <li>George Washington</li>
      <li>John Adams</li>
      <li>Thomas Jefferson</li>
    </ul>

    <ol start="4">
      <li>James Madison</li>
      <li>James Monroe</li>
      <li>John Quincy Adams</li>
    </ol>

    <ul
      style={{
        backgroundColor: '#ddd',
        paddingTop: '1em',
        paddingBottom: '1em',
        fontWeight: 'bold'
      }}
    >
      {presidents.map(president => (
        <li key={president}>{president}</li>
      ))}
    </ul>

    <ul>
      {nextPresidents.map(president => {
        return president.presidentIndex % 2 ? (
          <li
            key={president.presidentIndex}
          >{`${president.lastName}, ${president.firstName}, ${president.presidentIndex}-th`}</li>
        ) : null;
      })}
    </ul>

    <ul className="events">
      {serverResponse
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(event => {
          const date = new Date(event.date);

          return (
            <li style={date < Date.now() ? { opacity: '0.5' } : null} key={event.title}>
              <a href={`https://www.facebook.com/events/${event.id}/`}>
                {event.title}
              </a>
              <span>
                {getDaytime(event.date)}, {date.toLocaleString()}
              </span>
              <span>{event.place}</span>
            </li>
          );
        })}
    </ul>

    <form action="https://postman-echo.com/post" method="POST">
      <label>
        Имя:
        <input type="text" name="name" required />
      </label>
      <label>
        Пароль:
        <input type="password" name="password" minLength={4} required />
      </label>
      <label htmlFor="basic">
        Базовый тариф
        <input type="radio" value="basic" name="plan" defaultChecked={true} />
      </label>
      <label>
        Премиум тариф
        <input type="radio" value="premium" name="plan" />
      </label>
      <label>
        Присылайте мне новости на почту
        <input type="checkbox" name="news" defaultChecked={true} />
      </label>
      <button type="submit">Купить</button>
    </form>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
