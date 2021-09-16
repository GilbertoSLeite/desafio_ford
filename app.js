const cors = require("cors");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");

const db = require("./infrastructure/database/index");

db.sequelize.sync();

const app = express();

const corsOptions = {
  origin: "*",
  methods: "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT",
  allowedHeaders:
    "Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token",
};

app.use(logger("common"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// Home Page
app.get("/", (req, res) => {
  res.json({
    message: "Seja bem vindo ao projeto de Biblioteca Digital MAAT Digital.",
  });
});

// Analisar Cors do Navegador
app.use(cors(corsOptions));

require("./interface/routes/routesEstoques")(app);

// catch 404 and forward to error handler
function ErroStatus(req, res, next) {
  return (
    res.statusCode >= 400 &&
    res.statusCode <= 511 &&
    next(createError(res.statusCode))
  );
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : next(err);
  // render the error page
  res.status(err.status || 500);
}

// error handler
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(ErroStatus);

module.exports = app;
