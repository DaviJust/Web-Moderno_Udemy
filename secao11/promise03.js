const fs = require('fs');

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFile('E:\GitHub\Web-Moderno_Udemy\secao11\read.txt')
  .then(content => {
    console.log(content);
  })
  .catch(err => {
    console.error('Erro ao ler o arquivo:', err);
  });