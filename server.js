const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    res.writeHead(200, {'Content-Type': 'text/json'});
    if('input' in params){
      // not to clear about

      let userString = params['input']
      let userArray = userString.split("");

      let value1 = Number(userArray[0]);
      let value2 = Number(userArray[1]);
      let value3 = Number(userArray[2]);
      let value4 = Number(userArray[3]);
      let value5 = Number(userArray[4]);

      const userChoiceValue = value1 + value2 + value3 + value4 + value5

      let firstNameArray = ["mark", "jose", "martin", "ilunga", "thais", "mark"]
      let lastNameArray = ["vivas", "smith", "lit", "yerr", "meep", "mark"]
      let firstName = firstNameArray[userChoiceValue]
      let lastName = lastNameArray[userChoiceValue]
      console.log(firstName)
      console.log(lastName)


     //  if(userChoiceValue > 0 && userChoiceValue < 14){
     //    firstName = "Insane"
     //  }
     //  else if (userChoiceValue >= 15 && userChoiceValue <= 19 ) {
     //     firstName = "Midnight"
     //  }else if (userChoiceValue >= 20 && userChoiceValue <= 23 ) {
     //     firstName = "Misunderstood"
     //  }else if (userChoiceValue >= 22 && userChoiceValue <= 26 ) {
     //     firstName = "Lucid"
     //  }else if (userChoiceValue >= 27 && userChoiceValue <= 31 ) {
     //    firstName = "Ruff"
     // }else if (userChoiceValue >= 32 && userChoiceValue <= 100 ) {
     //     firstName  = "Phantom"
     //  }else {
     //     firstName  = "name unaviable, please make a valid selection"
     //  }
     //
     //  var userChoiceValue2 = userChoiceValue + 3;
     //  let lastName = ''
     //
     //  if(userChoiceValue2 > 0 && userChoiceValue2 < 6){
     //     lastName = "Knight"
     //  }
     //  else if (userChoiceValue2 >= 7 && userChoiceValue2 <= 8 ) {
     //     lastName = "Demon"
     //  }else if (userChoiceValue2 >= 9 && userChoiceValue2 <= 12 ) {
     //     lastName = " Freak "
     //  }else if (userChoiceValue2 >= 13 && userChoiceValue2 <= 14 ) {
     //     lastName = "Assassin"
     //  }
     //  else if (userChoiceValue2 >= 15 && userChoiceValue2 <= 19 ) {
     //     lastName = "Ambassador"
     //  }else if (userChoiceValue2 >= 20 && userChoiceValue2 <= 23 ) {
     //     lastName = "Demon"
     //  }else if (userChoiceValue2 >= 22 && userChoiceValue2 <= 26 ) {
     //     lastName = "Angel"
     //  }else if (userChoiceValue2 >= 27 && userChoiceValue2 <= 31 ) {
     //     lastName = "Hunter"
     //  }else if (userChoiceValue2 >= 31 && userChoiceValue2 <= 35 ) {
     //     lastName  = "Love"
     //  }else {
     //     lastName  = "name unaviable, please make a valid selection"
     //  }



      // line 21-23 all the code we use to get the name

      let answerName = {
        wutangname1 : firstName,
        wutangname2 : lastName
        // api we are sending back
        // DO THIS STUFF ON MY MAIN .JS FILE line 37-38
      }
      console.log(answerName)
      res.end(JSON.stringify(answerName)) // this turns
      return // may or may not need but we'll see
      // }//student = leon
    }

    //student if
  }//else if
  else if (page == '/css/style.css'){
    // figure out the duplicate the style.css
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
// 8000 is the localhost for browser. access this by localhost:8000
