const express = require ('express');
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require(`./routes`);


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Metodos HTTP
 * 
 * GET: Buscar/Listar uma informacao do backend
 * POST: Criar uma informacao no backend
 * PUT: Alterar uma informacao no backend
 * DELETE: DEletar uma informacao no backend
 */

 /**
  * Tipos de parametros
  * 
  * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, Paginacao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao usado para criar/alterar recursos
  * 
  */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table(`users`).select(`*`).where()
 * 
 */


module.exports= app;

