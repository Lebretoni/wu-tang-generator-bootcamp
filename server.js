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

      let firstNameArray = ["Insane", "Midnight", "Misunderstood", "Lucid", "Ruff", "Phantom","Profound","Amateur","Lucky","Unlucky","Stupid","Loving","Hatred","Bad","Big","Little","Irate","Insane", "Midnight", "Misunderstood", "Lucid", "Ruff", "Phantom","Profound","Amateur","Lucky","Unlucky","Stupid","Loving","Hatred","Bad","Big","Little","Irate"]
      let lastNameArray = ["Knight", "Demon", "Freak", "Assassin", "Ambassador", "Demon","Angel","Hunter","Love","Prophet","Madman","Leader","Mastermind","Knight", "Demon", "Freak", "Assassin", "Ambassador", "Demon","Angel","Hunter","Love","Prophet","Madman","Leader","Mastermind"]
      let firstName = firstNameArray[userChoiceValue]
      let lastName = lastNameArray[userChoiceValue]
      console.log(firstName)
      console.log(lastName)

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
