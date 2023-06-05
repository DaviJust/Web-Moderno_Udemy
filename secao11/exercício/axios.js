const axios = require('axios');

function getClassInfo(url) {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error(`Error fetching class info from ${url}: ${error}`);
    });
}

// Retrieve class information for all classes (A, B, C) and map to name and class
axios.all([
  getClassInfo('http://files.cod3r.com.br/curso-js/turmaA.json'),
  getClassInfo('http://files.cod3r.com.br/curso-js/turmaB.json'),
  getClassInfo('http://files.cod3r.com.br/curso-js/turmaC.json')
])
  .then(axios.spread((classA, classB, classC) => {
    const mappedData = [
      ...classA.map(student => ({
        name: student.nome,
        class: 'A'
      })),
      ...classB.map(student => ({
        name: student.nome,
        class: 'B'
      })),
      ...classC.map(student => ({
        name: student.nome,
        class: 'C'
      }))
    ];

    console.log(mappedData);
  }))
  .catch(error => {
    console.error(error);
  });