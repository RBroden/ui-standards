// based on https://github.com/TomDoesTech/Google-OAuth-NodeJS/tree/main
const express = require('express')
const app = express()
const port = 3000
import {
  // createUserSessionHandler,
  // getUserSessionsHandler,
  // deleteSessionHandler,
  googleOauthHandler
} from "./controller/session.controller";

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'dist')));

app.get("/api/sessions/oauth/google", googleOauthHandler);

app.listen(port, () => {
  console.log(`Example app: http://localhost:${port}`)
})