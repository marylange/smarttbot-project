// import React from 'react';
// import ReactFrappeChart from "react-frappe-charts";
// import '../styles/MyChartGra.css';
// import * as API from '../services/Api';

// export default function MyChart() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     API.APIRequestMock().then((result) => {
//       setData(result.data);
//       console.log('result', result.data);
//     });
//   });

//   return (
//     <div>
//       <div>
//         <h4>Histórico do dia</h4>
//         <span>última atualização . {new Date(element.updated_at).getHours() + "h"}</span>
//       </div>
//       {data}
//       <ReactFrappeChart
//         type="line"
//         colors={["#21ba45"]}
//         height={150}
//         data={{
//           labels: element.movimentations.slice(Math.max(element.movimentations.length - 8, 1)).map(moviment => new Date(moviment.date).getHours() + "h"),
//           datasets: [{ values: element.movimentations.slice(Math.max(element.movimentations.length - 8, 1)).map(moviment => moviment.value) }],
//         }}
//       />
//     </div>
//   );
// }
