const APIEndpoint = 'https://api-front-test.k8s.smarttbot.com/api/v1/robot';

const APIRequest = (url) =>
  fetch(url)
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
    )
    .catch((error) => console.log('Erro na requisição da API', error));

const componentRunningRobots = () => {
  APIRequest(APIEndpoint);
}

export default componentRunningRobots;
