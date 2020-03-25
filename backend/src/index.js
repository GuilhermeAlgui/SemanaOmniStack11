const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * metodos HTTP
 * 
 * GET: Buscar info no backend
 * POST: Cria info no backend
 * PUT: Altera info no backend
 * DELETE: Detela info no backend
 * 
 */

 /**
  * Tipo de Parametros
  * 
  * Query params: parametros enviados na rota apos "?"(filtros ou paginação)
  * Route params: parametros utilizados para identificar recursos
  * Request Body:Corpo da requisição, utilizado para criar ou alterar recursos.
  *   * 
  * 
  */

    /**
     * SQL: MySQL,SQLite, PostgreSQL, Oracle, Microsoft SQL server
     * NoSQL: MongoDB, CouchDB,etc 
     * 
     */

    /**
     * driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */




app.listen(3333);