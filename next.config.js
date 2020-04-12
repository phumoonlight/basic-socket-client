module.exports = {
  env: {
    HOST_SERVER: process.env.NODE_ENV === 'production' ? 'https://basic-socket-server.herokuapp.com/' : 'http://localhost:8080',
  },
}