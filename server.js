const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});




const Express = require('express');
const app = new Express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const fixturePackage = require('./fixtures/data.json');


server.listen(3001, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Socket server listening on port %s', 3001);
  }
});

io.on('connection', function (socket) {

  socket.on('data', function () {
    io.sockets.emit('data', fixturePackage.flights);
  });
  
});