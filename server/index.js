const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/codex", (req, res) => {
    res.json({ message: "Hello codeX!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});