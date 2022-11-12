const express = require('express')
const locationRouter = require("./routes/locations.routes")
const PORT = process.env.PORT || 8080
const cors = require('cors')
const path = require("path");

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static('../build'));

app.get('/', (req, res) => res.sendFile(path.resolve('../', 'build', 'index.html')));

app.use("/api", locationRouter)

app.listen(PORT, () => console.log(`server started on port ${8080}`))