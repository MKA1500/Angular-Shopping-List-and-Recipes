var mongoose = require('response');
mongoose.connect('mongodb://localhost/social', function(){
  console.log('we have a connection with Mongo DB');
});
module.exports = mongoose;
