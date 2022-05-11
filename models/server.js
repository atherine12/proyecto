//const express = require("express");
import express from "express";
//const express =require("cors")
import cors from "cors";
import {dbConnection} from "../database/config.js";
import persona from "../routes/persona.js"

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port=process.env.PORT;
    this.connectarBd()
    this.routes()
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('public'))
  } 
  async connectarBd(){
    await dbConnection()
  }

  routes(){
    this.app.use( "/api/persona" , persona )
  }

  escuchar() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

export default Server

// base de tados mongo 
// base de tados d peliculas
// imagen descripcion de la peliculas
// dbajo los Autores 
// genero de la pellicula
// califucacion y comentarios

// serria u na interfas 

// cundo se selccione slas pelicula debe salir lo anterios 

// permitir insertar peliculas 
// poster actores etc 
// activar y inactivar la pelicula permitir buscar :genero titulo,actores
// clasificarse en varios generos

// PERMITIR GUARDAR EN FAVORITOS   
// PERMITIR INICIAR SESION Y INCRIPTAR LA CALVE 

// APPI PELICULAS BUSCAR DE MOVIES tm
