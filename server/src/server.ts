import express from "express"

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello codeX" })
})

app.listen(3001, () => console.log("Server ON "))