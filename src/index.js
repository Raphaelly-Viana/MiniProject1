const express = require("express");
const app = express();
app.use(express.json());
const bakeryRoutes = require("./Routes/bakery");

const port = 5050;

app.use("/", express.static("./public"));
app.use("/api/bakeries", bakeryRoutes);

app.listen(port, () => {
  console.log("server is up");
});