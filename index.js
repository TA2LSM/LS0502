const fs = require('fs');
//const http = require("http");
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
  console.log(`Breed: ${data}`);

  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
    // if (err) console.log('Error Massage: ' + err.message);
    // else {
    //   console.log(res.body.message);

    //   fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //     console.log('Random dog image path saved to file!');
    //   });
    // }

    if (err) return console.log('Error Massage: ' + err.message);
    console.log(res.body.message);

    fs.writeFile('dog-img.txt', res.body.message, (err) => {
      console.log('Random dog image path saved to file!');
    });
  });
});
