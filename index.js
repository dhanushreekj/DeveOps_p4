const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req,res) => {
  res.send("Git Integration");
});
app.listen(port, () => {
  console.log(`server is runnuning on http://localhost:${port}`);
});

