const express = require("express")
const app = express()
const port = 8888

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`Servers started at port ${port}`)
})