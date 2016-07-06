import io from 'socket.io-client';


export default class Sock {
  static connect(callback) {
    this.socket = io.connect("http://localhost:3001");
    this.listenToEvent('connect', callback);
  }

  static listenToEvent(event, callback) {
    this.socket.on(event, callback);
  }

  static sendEvent(event, data) {
    this.socket.emit(event, data);
  }

}
