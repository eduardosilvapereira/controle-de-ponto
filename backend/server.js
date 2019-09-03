const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const configs = require("./src/configs");

// iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(configs.DB_CONNECTION_URL, {
  useNewUrlParser: true
});

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(configs.PORT, () => {
  console.log(`[Server] ${configs.BASE_URL}`);
  console.log(`[API] ${configs.BASE_URL}/api/`);
});
