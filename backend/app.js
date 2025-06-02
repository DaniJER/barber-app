const express = require("express");
const pool = require("./config/db");

const app = express();
const port = 3000;

app.use(express.json());

// Ruta de prueba para consultar la base de datos
app.get("/usuarios", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en la consulta");
  }
});

app.listen(port, () => {
  console.log(`Servidor Express en http://localhost:${port}`);
});

module.exports = app;
