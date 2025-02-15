import app from "./app";

console.log("iniciando...");

app.listen(
  {
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
  },
  () =>
    console.log(
      `servidor iniciado em http://localhost:${process.env.PORT || 3000}`
    )
);
