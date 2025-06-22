const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

// Inicializar app
console.log("App de node arrancada");

// Conectar a la base de datos
connection();

// Servidor
const app = express();
const port = process.env.PORT || 3900; // <-- PUERTO DINÁMICO para Glitch

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));

// Rutas
const user_rutas = require("./routers/auth.routes");
const productos_rutas = require("./routers/productos.routes");
const carrusel_rutas = require("./routers/carrusel.routes");

app.use("/admin", user_rutas);
app.use("/admin/products", productos_rutas);
app.use("/admin/carrusel/products", carrusel_rutas);

// Crear servidor
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: " + port);
});
