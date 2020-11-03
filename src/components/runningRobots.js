import React, { useEffect, useState } from 'react';
import API from '../services/api';
import '../styles/runningRobots.css';

function modeCheck(element) {
  if (element.mode === 1) {
    return <p>Otimista</p>
  } else {
    return <p>Pessimista</p>
  }
}

function runningCheck(element) {
  if (element.running === 1) {
    return <p>Em execução</p>
  } else {
    return <p>Parado</p>
  }
}

function RunningRobots() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API().then((result) => {
      setData(result.data);
      console.log('result', result.data);
    });
  });

  return (
    <div className="container">

      <div className="content-session">
        <ul>
          {data.map(element => {

            return (
              <li key={element.title}>
                <section className="title-field">
                  <div>
                    <h4>{element.title}</h4>
                    <span>#{element.id}</span>
                  </div>
                  <div className="running">
                    <div>{runningCheck(element)}</div>
                  </div>
                </section>

                <main>
                  <section className="above-values">
                    <div>
                      <p>{modeCheck(element)}</p>
                    </div>
                    <div>
                      <p>{element.stock_codes}</p>
                    </div>
                    <div>
                      <p>{element.type}</p>
                    </div>
                  </section>
                </main>

              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RunningRobots;
