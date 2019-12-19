import { Router } from "express";
import pokemon from "./pokemon.js";

const routes = Router();
routes.use('/pokemons', pokemon);
export default routes;