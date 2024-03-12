const express = require("express");
const pgp = require("pg-promise");

const app = express();
app.use(express.json());
app.use("/", express.static("./client"));

const connection = pgp()("postgres://default:************@ep-gentle-cherry-a4qvhr62.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require");

app.get("/api/lancamentos", async function  (req, res) {
	const lancamentos = await connection.query("select * from financas_pessoais.lancamento", []);
	res.json(lancamentos);
});

app.post("/api/lancamentos", async function  (req, res) {
	const lancamento = req.body;
	await connection.query("insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ($1, $2, $3, $4;)", [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]);
	res.end();
});

app.listen(3000);

