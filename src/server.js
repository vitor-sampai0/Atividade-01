
import express from "express"
import {config} from "dotenv"

import routes from "./routes/index.routes.js"

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes);


app.listen(serverPort, () => {
    console.log(`👌Server starded on http://localhost:${serverPort}`)
})
