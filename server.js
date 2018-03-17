var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function(req, res){
  res.json([
    {
      username: 'Macko666',
      body: 'I just ate breakfast'
    }
  ]);
});

app.post('/api/posts', function(req, res){
  console.log('the post has been received!');
  console.log(req.body.username);
  console.log(req.body.body);
  res.send(201);
});

app.listen(3000, function(){
  console.log('Server is running at port 3000')
});
// go to:
// http://localhost:3000/api/posts
