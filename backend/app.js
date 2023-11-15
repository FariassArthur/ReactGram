require("dotenv").config() //puxa o require e dá acesso ao arquivo .env (nele fica as variáveis do ambiente e normalmente não fica no versionamento)

const express = require("express"); //inicia o back
const path = require("path"); 
const cors = require("cors"); //https://www.npmjs.com/package/cors

const port = process.env.PORT;

const app = express()

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Solve Cors (Executa requisição pelo mesmo dominio)
const corsOptions = {
    origin: 'http://localhost:5173',  // Permitir requisições apenas do frontend em http://localhost:5173
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
  

//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
require("./config/db.js");

//routes
const router = require("./routes/Router.js");

app.use(router);


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});