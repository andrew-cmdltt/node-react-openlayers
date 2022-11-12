const express = require('express')
const locationRouter = require("./routes/locations.routes")
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use("/api", locationRouter)

app.listen(PORT, () => console.log(`server started on port ${8080}`))