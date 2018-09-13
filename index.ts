import app from './src/app';
const config = require("./config/config.json");

const port = process.env.PORT || config.port;

app.listen(port, (err: Error) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})