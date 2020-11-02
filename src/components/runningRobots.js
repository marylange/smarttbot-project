import React, { useEffect, useState } from 'react';
import API from '../services/api';

function RunningRobots() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const result = API().then((data) => {
      console.log('result', data);
    });
    setData(result.data);
  });



  return (
    <div className="container">
      <div className="content">
        <div>
          <h2>Título do Robô</h2>
        </div>
        <div>Histórico do dia</div>
      </div>
    </div>
  );
}

export default RunningRobots;
