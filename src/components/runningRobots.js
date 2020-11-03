import React, { useEffect, useState } from 'react';
import * as API from '../services/Api';
import '../styles/RunningRobots.css';
import ReactFrappeChart from "react-frappe-charts";

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
    API.APIRequestMock().then((result) => {
      setData(result.data);
      console.log('result', result.data);
    });
  });

  function renderLastPaper(element) {
    if (element.last_paper !== undefined) {
      return (
        <section className="top-element">
          <div>
            <p>{element.last_paper.position}</p>
          </div>

          <div>
            <p>{element.last_paper.paper}</p>
            <p>Compra</p>
          </div>

          <div className="bottom-element">
            <div>
              <p>{element.last_paper.paper_value}</p>
            </div>
            <div>
              <p>R$ {element.last_paper.profit}</p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="container">

      <div className="content-session">
        <ul>
          {data.map(element => {

            return (
              <li key={element.title}>
                <div className="content-session-information">
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
                        <div>
                          <span>{modeCheck(element)}</span>
                        </div>
                        <div>
                          <span>{element.stock_codes}</span>
                        </div>
                        <div>
                          <span>{element.type}</span>
                        </div>
                      </div>
                    </section>
                  </main>

                  <section className="last-paper">
                    {renderLastPaper(element)}
                  </section>
                </div>

                <div className="content-session-graphic">
                  <div>
                    <h4>Histórico do dia</h4>
                    <span>última atualização . {new Date(element.updated_at).getHours() + "h"}</span>
                  </div>
                  <ReactFrappeChart
                    type="line"
                    colors={["#21ba45"]}
                    height={150}
                    data={{
                      labels: element.movimentations.slice(Math.max(element.movimentations.length - 8, 1)).map(moviment => new Date(moviment.date).getHours() + "h"),
                      datasets: [{ values: element.movimentations.slice(Math.max(element.movimentations.length - 8, 1)).map(moviment => moviment.value) }],
                    }}
                  />
                </div>

              </li>
            );
          })}
        </ul>
      </div>
    </div >
  );
}

export default RunningRobots;
