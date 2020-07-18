// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express')
// const fs = require('fs')
const app = express()

// our default array of dreams
const dreams = [
  'Find and count some sheep',
  'Climb a really tall mountain',
  'Wash the dishes'
]

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// https://expressjs.com/en/starter/basic-routing.html
app.set('port', 4000)
app.get('/', (request, response) => {
  // let endsWithDefault = false
  // let hasHtml = false
  // /?images=soundwaves/4.6.0/default.png&test=1
  console.log(request._parsedUrl)
  /*
  if (Object.keys(request.query).length >= 1 && request.query.image) {
    endsWithDefault = typeof request.query.image === 'string' ? request.query.image.split('/')[request.query.image.split('/').length - 1].endsWith('default.jpg') : false
  }
  console.log(endsWithDefault)
  */
  response.sendFile(`${__dirname}/public/step.html`)
  // response.sendFile(__dirname + `/public/images/${request.query.image}${!endsWithDefault ? `/default.jpg` : ''}`)
})

// send the default array of dreams to the webpage
app.get('/dreams', (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
